import React, { useState } from 'react';
import NavTag from '../components/NavTag';
import { Jumbotron, Container, Form, Button} from 'react-bootstrap';
import Emoji from '../components/Emoji';

export default function AddPost() {
    const [emojiShow, setEmojiShow] = useState(false);

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

    return (
        <div>
            <NavTag />
            <Container style={containerStyle}>
                <Jumbotron>
                    <h4 className="text-center">Create Post</h4>
                    <hr />
                    <h6 className="text-left">UserName</h6>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>What's on your mind ?</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button onClick={onButtonClick}>Emoji</Button>
                            {emojiShow ? <Emoji /> : null}
                        <br />
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Upload Image :" style={imgStyle} className="text-left" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add Post
                        </Button>
                    </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}