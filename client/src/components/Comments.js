import React from 'react';
import { List } from 'react-bootstrap';


export default function Comments() {
    const [comments, setComments] = useState([])

    useEffect(() => {
        loadComments()
    }, [])

    // loads all the posts
    function loadComments() {
        API.getComments()
            .then(res =>
                setComments(res.data)
            )
            .catch(err => console.log(err));
    }
    return (
        <div>
            { comments.length ?
                comments.map(userComment =>
                    <li>{userComment.comment}</li>
                ) : (<h3>No Comments to Display</h3>)
            }
        </div>
    )
}
