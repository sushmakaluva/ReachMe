import React, { useState, useEffect,useRef } from 'react';
import API from '../utils/API';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import session from "../utils/session";

export default function Comments(props) {
    const commentRef = useRef();
    const [comments, setComments] = useState([]);
    const [formObject, setFormObject] = useState({
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    useEffect(() => {
        loadComments(props.postId)
    },)

    // loads all the posts
    function loadComments(postId) {
        API.getComments(postId)
            .then(res => setComments(res.data))
            .catch(err => console.log(err));
    }

    const handleOnSubmit = (postId) => e => {
        e.preventDefault();
        API.addComment(formObject.comment, postId, session.get()._id)
            .then(r => loadComments(postId))
            .catch(e => alert(e.error));
            commentRef.current.value = ""
    }

    function deleteCommentonClick(commentId, postId) {
        API.deleteComment(commentId)
        .then(res => loadComments(postId))
        .catch(err => console.log(err));
    }

    return (
        <div>
            {
                comments.map(userComment =>
                    <li style={{listStyleType: "none",textAlign:"left",padding:"5px"}}>
                    <span style={{fontWeight:"bold",padding:"5px"}}>{userComment.user_id.first_name+" "+userComment.user_id.last_name}</span>
                    <span>{userComment.comment}</span>
                    <span> { (userComment.user_id._id===session.get()._id) ? 
                    <button type="button" className="close" aria-label="Close" onClick={() => deleteCommentonClick(userComment._id,userComment.post_id)}>
                     <span aria-hidden="true">&times;</span>
                    </button>:""}</span> 
                    </li>
                )
            }
            <Form style={{margin:"5px"}} onSubmit={handleOnSubmit(props.postId)}>
                <InputGroup className="mb-3 col-sm">
                    <FormControl type="text" name="comment" ref={commentRef} onChange={handleInputChange}
                        placeholder="Add a comment..." />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type="submit">Post</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </div>
    )
}
