import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { Button } from 'react-bootstrap';
import NavTag from '../components/NavTag';
import session from "../utils/session";
import API from '../utils/API';
import UserPosts from '../components/UserPosts';

export default function ProfilePage(props) {
  const pathParams = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts()
  }, [])

  // loads all the posts of a particular user
  function loadPosts() {
    API.userPosts(pathParams.user_id)
      .then(res =>
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  }

  return (
    <div>
      <NavTag />
      <h3 style={{ margin: "100px" }}>Profile</h3>
      <UserPosts posts={posts} loadPosts={loadPosts} />
    </div>

  )
}
