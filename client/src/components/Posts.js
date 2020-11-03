import React from 'react';
import API from '../utils/API';
import { Card } from 'react-bootstrap';
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
                    <Card>
                        <h1>{post.user_id}</h1>
                        <img src={post.image} />
                        <p>Caption: {post.caption}</p>
                        <Comments postId={post._id} />
                    </Card>)
                ) : (<h3>No Posts to Display</h3>)
            }
        </div>
    )
}
