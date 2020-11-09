import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import { Button } from 'react-bootstrap';
import NavTag from '../components/NavTag';
import API from '../utils/API';
import UserPosts from '../components/UserPosts';

export default function ProfilePage(props) {
  const pathParams = useParams();
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getUserName()
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

  function getUserName() {
    let user_id = pathParams.user_id;
    API.getUserNameFromId(user_id)
      .then(res => {
        setUserName(res.data[0].first_name + " " + res.data[0].last_name)
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <NavTag />
      <h3 style={{ margin: "100px" }}>{userName}</h3>
      <UserPosts posts={posts} loadPosts={loadPosts} />
    </div>

  )
}
