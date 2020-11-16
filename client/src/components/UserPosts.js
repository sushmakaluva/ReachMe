import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import UserPostModal from "./UserPostModal";

export default function UserPosts(props) {

  const [modalShow, setModalShow] = useState(false);
  const [postDetails, setPostDetails] = useState({});

  const handleOnClick = (post) => {
    setPostDetails(post);
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
            <Card style={cardStyle} onClick={() => handleOnClick(post)}>
              <img src={post.image} alt="profile-pic" style={imgStyle} />
              <p style={{ textAlign: "left", padding: "5px" }}>
                <span style={{ fontWeight: "bold" }}>{post.user_id.first_name + " " + post.user_id.last_name}</span>
                <span>  {post.caption}</span>
              </p>
            </Card>
          </Col>
        )}
      </Row>
      <UserPostModal
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
        postData={postDetails}
        loadPosts={props.loadPosts}
      />
    </div>
  )
}
