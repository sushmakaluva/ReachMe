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

  const imgStyle = {
    width: "auto",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "500px",
  }
  const handleOnDelete = (postId) => {
    API.deletePost(postId)
      .then(res => {
        props.setModalShow(false)
        props.loadPosts();
      })
      .catch(err => console.log(err));

  }

  const getUserName = (postData) => {
    return (postData.user_id && postData.user_id.first_name) + " " + (postData.user_id && postData.user_id.last_name)
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
          {getUserName(props.postData)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={cardStyle}>
          <img src={props.postData.image} alt="profile-pic" style={imgStyle} />
          <p style={{ textAlign: "left", padding: "5px" }}>
            <span style={{ fontWeight: "bold" }}>{getUserName(props.postData)}</span>
            <span>  {props.postData.caption}</span>
          </p>
          <p style={{
            textDecoration: "underline", textAlign: "left",
            marginLeft: "5px", color: "grey"
          }}>Comments
          </p>
          <Comments postId={props.postData._id} />
        </Card>
        {(props.postData.user_id && props.postData.user_id._id === session.get()._id) ?
        <Button variant="secondary" onClick={() => handleOnDelete(props.postData._id)} >Delete Post</Button>:""}
      </Modal.Body>
    </Modal>
  );
}
