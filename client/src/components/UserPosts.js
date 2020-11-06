import { post } from 'jquery';
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import session from "../utils/session";
import UserPostModal from "./UserPostModal";

export default function UserPosts(props) {

  const [modalShow, setModalShow] = useState(false);
  // const [postDetails,setPostDetails]=useState("");

  const handleOnClick = () => {
    setModalShow(true);
  }

  const imgStyle = {
    height: "300px",
    width: "300px"
  }

  const cardStyle = {
    width: "306px",
    justifyContent: "space-around",
    borderRadius: "5px",
    border: "solid black",
    borderWidth: "100%",
    margin: "auto",
    marginBottom: "100px",
    cursor: "pointer"
  }

  return (
    <div>
      <Row >
        {props.posts.map(post =>
          <Col className="col-lg-4 col-md-6 col-sm-12 col-12">
            <Card style={cardStyle} onClick={handleOnClick}>
              <img src={post.image} alt="profile-pic" style={imgStyle} />
              <p style={{ textAlign: "left", padding: "5px" }}>
                <span style={{ fontWeight: "bold" }}>{session.getUserName()}</span>
                <span>  {post.caption}</span>
              </p>
            </Card>
          </Col>
        )}
      </Row>
      <UserPostModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        postId={post._id}
      />
    </div>
  )
}