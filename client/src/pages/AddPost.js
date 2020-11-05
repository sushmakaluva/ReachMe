import React, { useState } from 'react';
import {storage} from "../firebase/firebase.js";
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

    const allInputs = {imgUrl: ''};
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);

    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }

const handleFireBaseUpload = e => {
  e.preventDefault()
console.log('start of upload');
// async magic goes here...
if(imageAsFile === '' ) {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
}

const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)

//initiates the firebase side uploading 
    // uploadTask.on('state_changed', 
    // (snapShot) => {
    //   //takes a snap shot of the process as it is happening
    //   console.log(snapShot)
    // }, (err) => {
    //   //catches the errors
    //   console.log(err)
    // }, () => {
    //   // gets the functions from storage refences the image storage in firebase by the children
    //   // gets the download url then sets the image from firebase as the value for the imgUrl key:
    //   storage.ref('images').child(imageAsFile.name).getDownloadURL()
    //    .then(fireBaseUrl => {
    //      setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
    //    })
    // })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    }
    
    // const imgStyle = {
    //     fontWeight: "bold",
    // }

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
                        <form onSubmit={handleFireBaseUpload}>
                         <input onChange={handleImageAsFile} type="file" />
                        </form>
                        <Button variant="success" type="submit" >
                            Add Post
                        </Button>
                        <img src={imageAsUrl.imgUrl} />
                    </Form>
                </Jumbotron>
            </Container>
        </div>
    )
}