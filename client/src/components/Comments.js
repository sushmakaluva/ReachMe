import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import session from "../utils/session";

export default function Comments(props) {
    const [comments, setComments] = useState([]);
    const [formObject, setFormObject] = useState({
        caption: ""
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    useEffect(() => {
        loadComments(props.postId)
    }, [])

    // loads all the posts
    function loadComments(postId) {
        API.getComments(postId)
            .then(res => setComments(res.data))
            .catch(err => console.log(err));
    }

    // TODO : clear comment field after submitting
    const handleOnSubmit = (postId) => e => {
        e.preventDefault();
        API.addComment(formObject.comment, postId, session.get()._id)
            .catch(e => alert(e.error))
            .then(r => loadComments(postId))
            .catch(e => alert(e.error));

    }

    return (
        <div>
            <Form onSubmit={handleOnSubmit(props.postId)}>
                <InputGroup className="mb-3 col-sm">
                    <FormControl type="text" name="comment" onChange={handleInputChange}
                        placeholder="Type in your comment ..." />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit">Enter</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {
                comments.map(userComment =>
                    <li>{userComment.user_id.first_name} : {userComment.comment}</li>
                )
            }
        </div>
    )
}
