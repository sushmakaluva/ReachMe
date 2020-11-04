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
                        <p>UserName:{post.user_id && post.user_id.first_name}</p>
                        <Card>
                            <img src={post.image} alt="profile-pic" />
                            <p>Caption: {post.caption}</p>
                            <Comments postId={post._id} />
                        </Card>
                    </Container>
                )
                ) : (<h3>No Posts to Display</h3>)
            }
        </div>
    )
}
