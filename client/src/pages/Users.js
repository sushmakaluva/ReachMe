import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import NavTag from '../components/NavTag';
import { Jumbotron, Row } from 'react-bootstrap';
import session from "../utils/session";
import FriendCard from "../components/FriendCard";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    loadUsers()
  }, [])

  // loads all the users list
  function loadUsers() {
    let allUsers;
    API.getAllUsers()
      .then(res => {
        allUsers = res.data;
        return API.fetchFriendsofUser(session.get()._id)
      })
      .then(friends => {
        setFriends(friends.data)
        setUsers(allUsers)
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <NavTag />
      <Jumbotron className="justify-content-center" style={{ margin: "100px", backgroundImage: "linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)",}}>
        <h1>Friends</h1>
        <Row className="col-lg-12 col-md-6 col-sm-6 col-6">
          {users
            .filter(user => user._id !== session.get()._id)
            .map(user =>
              <FriendCard user={user} friends={friends} />
            )}
        </Row>
      </Jumbotron>
    </div >
  )
}
