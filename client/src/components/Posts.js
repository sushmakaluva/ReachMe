import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Card, Container} from 'react-bootstrap';
import Comments from './Comments';
import session from '../utils/session';

export default function Posts(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        loadPosts()
    }, [])

    // loads all the posts
    function loadPosts() {
        API.getPosts(session.get()._id)
            .then(res =>
                setPosts(res.data)
            )
            .catch(err => console.log(err));
    }

    const containerStyle = {
        width: "500px",
        marginBottom: "30px",
        marginTop: "100px",
    }
    const cardStyle = {
        width: "500px",
        marginBottom: "30px",
        marginTop: "100px",
        borderRadius: "5px",
        border: "solid black",
        borderWidth: "100%"
    }

    const nameStyle = {
        textAlign: "left", fontWeight: "bold", margin: "5px"
    }
    const imgStyle = {
        width: "auto",
        maxWidth: "500px",
        height: "auto",
        maxHeight: "500px"
    }

    // const BtnStyle = {
    //     borderRadius: "20px", width: "50px", height: "30px", margin: "5px", marginBottom: "20px"
    // }

    return (
        <div>
            { posts.length ?
                (posts.map(post =>
                    <Container style={containerStyle}>
                        <Card style={cardStyle}>
                            <a href={`/profile/${post.user_id._id}`} style={nameStyle} >
                                {post.user_id && post.user_id.first_name + " " + post.user_id.last_name}
                            </a>
                            <img src={post.image} alt="insta-pic" style={imgStyle} />
                            <p style={{ textAlign: "left", padding: "5px", }}>
                                <span style={{ fontWeight: "bold" }}>{post.user_id && post.user_id.first_name + " " + post.user_id.last_name}</span>
                                <span>  {post.caption}</span>
                            </p>
                            {/* <Button
                                size="sm" variant="danger" onClick={incrementMe} style={BtnStyle}> <i className="heart fa fa-heart-o"></i>{count}
                            </Button> */}
                            <p style={{
                                textDecoration: "underline", textAlign: "left",
                                marginLeft: "5px", color: "grey"
                            }}>Comments
                            </p>
                            <Comments postId={post._id} />
                        </Card>
                    </Container>
                )
                ) : (<h3>No Posts to Display</h3>)
            }
        </div >
    )
}
