const path = require("path");
const authController = require('../controllers/authController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const friendController = require('../controllers/friendController.js');

module.exports = function (router) {
    // user sign-up
    router.post('/api/signup', function (req, res) {
        authController.create(req.body)
            .then(dbUser => res.status(200).json(dbUser))
            .catch(err => res.status(400).json({ error: err.message }))
    })
    // user login
    router.post('/api/login', function (req, res) {
        authController.searchByEmail(req.body.email, req.body.password)
            .then(dbUsers => res.status(200).json(dbUsers[0]))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    //  add post
    router.post('/api/posts', function (req, res) {
        postController.create(req.body)
            .then(dbPostData => res.status(200).json(dbPostData))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // delete post
    router.delete('/api/post/:post_id', function (req, res) {
        postController.deletePost(req.params.post_id)
            .then(postsAll => res.status(200).json({ message: "deleted post" }))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // add comment
    router.post('/api/post/:post_id/comment', function (req, res) {
        console.log(req.params.post_id, req.body.user_id, req.body.comment)
        commentController.create(req.params.post_id, req.body.user_id, req.body.comment)
            .then(dbCommentsData => res.status(200).json(dbCommentsData))
            .catch(err => {
                res.status(400).json({ error: err.message })
            })
    })

    // get comments
    router.get('/api/post/:post_id/comments', function (req, res) {
        commentController.findByPostId(req.params.post_id)
            .then(commentsAll => res.status(200).json(commentsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // delete comment
    router.delete('/api/comments/:comment_id', function (req, res) {
        commentController.DeleteByCommentId(req.params.comment_id)
            .then(commentsAll => res.status(200).json({ message: "deleted comment" }))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // profile page - display posts of user
    router.get('/api/user/:user_id/posts', function (req, res) {
        postController.displayPostsByUserId(req.params.user_id)
            .then(userPosts => res.status(200).json(userPosts))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // get username by sending user_id
    router.get('/api/user/:user_id', function (req, res) {
        postController.getUserName(req.params.user_id)
            .then(userNames => res.status(200).json(userNames))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // follow friends
    router.post('/api/friends', function (req, res) {
        friendController.addfollower(req.body.follower, req.body.following)
            .then(dbfollow => res.status(200).json(dbfollow))
            .catch(err => {
                res.status(400).json({ error: err.message })
            })
    })

    // unfollow friends
    router.delete('/api/friends', function (req, res) {
        friendController.removefollower(req.body.follower, req.body.following)
            .then(dbunfollow => res.status(200).json(dbunfollow))
            .catch(err => {
                res.status(400).json({ error: err.message })
            })
    })

    // get friends list
    router.get('/api/friends', function (req, res) {
        friendController.ListUsers()
            .then(usersAll => res.status(200).json(usersAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // fetch friends page
    router.get('/api/friends/:user_id', function (req, res) {
        friendController.FetchFriends(req.params.user_id)
            .then(friendsAll =>
                res.status(200).json(friendsAll)
            )
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // fetch friends page
    router.get('/api/posts/:user_id', function (req, res) {
        friendController.FetchFriends(req.params.user_id)
            .then(friendsAll => {
                let followingUsers = friendsAll.map(friend => friend.following);
                followingUsers.push(req.params.user_id);
                return postController.displayPosts(followingUsers);
            })
            .then(postsAll => res.status(200).json(postsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // If no API routes are hit, send the React app
    router.all('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

}