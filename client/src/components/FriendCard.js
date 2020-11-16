import React, { useState, useEffect } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import session from "../utils/session";
import API from '../utils/API';

export default function FriendCard(props) {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    let user = props.user;
    let friends = props.friends;
    let followings = friends.map(friend => friend.following);
    setFollowing(followings.includes(user._id))
  }, [])

  function handleFollow(userId) {
    API.followFriend({ follower: session.get()._id, following: userId })
    setFollowing(true);
  }
  function handleUnFollow(userId) {
    API.unFollowFriend({ follower: session.get()._id, following: userId })
    setFollowing(false);
  }

  return (
    <div>
      
        <Col>
          <Card style={{ padding: "20px", margin: "20px", width:"300px"}}>
            <span>
              <li style={{ listStyleType: "none", fontWeight: "bold" }}>
                {props.user.first_name + " " + props.user.last_name}
              </li>
              <Button onClick={() => handleFollow(props.user._id)} style={{ margin: "10px" }}>
                {!following ? "Follow" : "Following"}
              </Button>
              {
                following ?
                  <Button onClick={() => handleUnFollow(props.user._id)}>UnFollow</Button>
                  : ""
              }
            </span>
          </Card>
        </Col>
      
    </div>
  )
}
