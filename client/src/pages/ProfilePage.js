import React, { useState, useEffect} from 'react';
// import { Button } from 'react-bootstrap';
import NavTag from '../components/NavTag';
import session from "../utils/session";
import API from '../utils/API';
import UserPosts from '../components/UserPosts';

export default function ProfilePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    loadPosts(session.get()._id)
  }, [])

  // loads all the posts of a particular user
  function loadPosts(user_id) {
    API.userPosts(user_id)
      .then(res =>
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  }

  return (
    <div>
      <NavTag />
      <h3 style={{ margin: "100px" }}>{session.getUserName()}</h3>
      <UserPosts posts={posts} />
    </div>

  )
}
