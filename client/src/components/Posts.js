import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Card, Container } from 'react-bootstrap';
import Comments from './Comments';

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadPosts()
    }, [])

    // loads all the posts
    function loadPosts() {
        API.getPosts()
            .then(res =>
                setPosts(res.data)
            )
            .catch(err => console.log(err));
    }

    return (
        <div>
            { posts.length ?
                (posts.map(post =>
                    <Container style={{ width: "600px", marginBottom: "30px" }}>
                      
                        <Card>
                          <p style={{textAlign:"left",padding:"5px",margin:"5px",fontWeight:"bold"}} >{post.user_id && post.user_id.first_name+" "+post.user_id.last_name}</p>
                            <img src={post.image} alt="profile-pic" />
                            <p style={{textAlign:"left",padding:"5px"}}><span style={{fontWeight:"bold"}}>{post.user_id && post.user_id.first_name+" "+post.user_id.last_name}</span>   <span>  {post.caption}</span></p>
                            <p style={{textDecoration: "underline",textAlign:"left",marginLeft:"5px",color:"grey"}}>Comments</p>
                            <Comments postId={post._id} />
                        </Card>
                    </Container>
                )
                ) : (<h3>No Posts to Display</h3>)
            }
        </div>
    )
}
