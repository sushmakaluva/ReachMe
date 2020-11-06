import React from 'react';
import { Modal } from 'react-bootstrap';
import session from "../utils/session";
import { Card, Button } from 'react-bootstrap';
import Comments from './Comments';
import API from '../utils/API';

export default function UserPostModal(props) {

  const showHideClassName = props.showModal ? "modal display-block" : "modal display-none";

  const cardStyle = {
    width: "400px",
    justifyContent: "space-around",
    borderRadius: "5px",
    border: "solid black",
    borderWidth: "100%",
    margin: "auto",
    marginBottom: "20px",
  }
  const nameStyle = {
    fontWeight: "bold", margin: "5px"
  }

  const imgStyle = {
    width: "auto",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "500px",
  }
  const handleOnDelete = (postId) => {
    API.deletePost(postId)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <Modal
      {...props}
      size="md"
      className={showHideClassName}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show} onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {session.getUserName()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={cardStyle}>
          <p style={nameStyle}>
            {props.postData.user_id && session.getUserName()}
          </p>

          <img src={props.postData.image} alt="profile-pic" style={imgStyle} />
          <p style={{ textAlign: "left", padding: "5px" }}>
            <span style={{ fontWeight: "bold" }}>{props.postData.user_id && session.getUserName()}</span>
            <span>  {props.postData.caption}</span>
          </p>
          <p style={{
            textDecoration: "underline", textAlign: "left",
            marginLeft: "5px", color: "grey"
          }}>Comments
          </p>
          {/* <Comments postId={props.postData._id} /> */}
        </Card>
        <Button variant="secondary" onClick={() => handleOnDelete(props.postData._id)}>Delete Post</Button>
      </Modal.Body>
    </Modal>
  );
}
