import React from 'react'
import 'posts.css';
import Avatar from "@material-ui/core/Avatar";

export default function Posts() {
    return (
        <div className= "posts">
            <div className="posts_header"></div>
            <Avatar
                className="post_avatar"
                alt= {username}
                src="/static/image/avatar/1.jpg"></Avatar>
            
            <h3>Username</h3>
            {/*header ->avatar + username */}

            <img className="posts_image" src="insert_image"></img> 
            {/*image*/}

            <h4 className="post_text"><stong>Username</stong>Add text here</h4>
            {/*username + caption*/}


            

        </div>
    )
}

  

export default Posts;
