const path = require("path");

const authController = require('../controllers/authController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');

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

    // get friends
    router.get('/api/friends', function (req, res) {
        authController.SearchFriends()
            .then(friendsAll => res.status(200).json(friendsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    //  add post
    router.post('/api/posts', function (req, res) {
        postController.create(req.body)
            .then(dbPostData => res.status(200).json(dbPostData))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    //get posts
    router.get('/api/posts', function (req, res) {
        postController.displayPosts()
            .then(postsAll => res.status(200).json(postsAll))
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

    // If no API routes are hit, send the React app
    // router.all('*', function (req, res) {
    //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
    // });

}