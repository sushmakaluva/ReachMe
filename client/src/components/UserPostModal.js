import React from 'react';
import { Modal } from 'react-bootstrap';
// import Posts from './Posts';
// import Comments from './Comments';
// import session from "../utils/session";
import Posts from "./Posts";

export default function UserPostModal(props) {

  const showHideClassName = props.showModal ? "modal display-block" : "modal display-none";

  // const cardStyle = {
  //   width: "306px",
  //   justifyContent: "space-around",
  //   borderRadius: "5px",
  //   border: "solid black",
  //   borderWidth: "100%",
  //   margin: "auto",
  //   marginBottom: "100px",
  // }

  // const imgStyle = {
  //   width: "auto",
  //   maxWidth: "500px",
  //   height: "auto",
  //   maxHeight: "500px",
  // }

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
          UserName
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Posts postId={props.postId}/>
      </Modal.Body>
    </Modal>
  );
}


