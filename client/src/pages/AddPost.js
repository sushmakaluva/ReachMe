import React, { useState } from 'react';
import NavTag from '../components/NavTag';
import API from '../utils/API';
import { Jumbotron, Container, Form, Button } from 'react-bootstrap';
import Emoji from '../components/Emoji';
import session from "../utils/session";

export default function AddPost() {
    const [emojiShow, setEmojiShow] = useState(false);
    const [formObject, setFormObject] = useState({
        caption: ""
    })


    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }

    const imgStyle = {
        fontWeight: "bold",
    }

    const containerStyle = {
        margin: "auto",
        height: "200px",
        width: "800px"
    }

    function onButtonClick() {
        setEmojiShow(true);
    }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        API.addPost({
            caption: formObject.caption,
            user_id: session.get()._id
        })
            .then(function (response) {
                window.location.href = "/"
            })
            .catch(e => {
                alert(e.error);
            });
    }

    return (
        <div>
            <NavTag />
            <Container style={containerStyle}>
                <Jumbotron>
                    <h4 className="text-center">Create Post</h4>
                    <hr />
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>What's on your mind ?</Form.Label>
                            <Form.Control type="text" name="caption" as="textarea" rows={5} onChange={handleInputChange} />
                        </Form.Group>
                        <Button onClick={onButtonClick}>Emoji</Button>
                        {emojiShow ? <Emoji /> : null}
                        <br />
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Upload Image :" style={imgStyle} className="text-left" />
                        </Form.Group>
                        <Button variant="success" type="submit" >
                            Add Post
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}