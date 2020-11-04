const authController = require('../controllers/authController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const path = require("path");

module.exports = function (router) {
    router.post('/api/signup', function (req, res) {
        authController.create(req.body)
            .then(dbUser => res.status(200).json(dbUser))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    router.post('/api/login', function (req, res) {
        authController.searchByEmail(req.body.email, req.body.password)
            .then(dbUsers => res.status(200).json(dbUsers[0]))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    router.get('/api/friends', function (req, res) {
        authController.SearchFriends()
            .then(friendsAll => res.status(200).json(friendsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    router.post('/api/posts', function (req, res) {
        postController.create(req.body)
            .then(dbPostData => res.status(200).json(dbPostData))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    router.get('/api/posts', function (req, res) {
        postController.displayPosts()
            .then(postsAll => res.status(200).json(postsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    router.post('/api/post/:post_id/comment', function (req, res) {
        console.log(req.params.post_id, req.body.user_id, req.body.comment)
        commentController.create(req.params.post_id, req.body.user_id, req.body.comment)
            .then(dbCommentsData => res.status(200).json(dbCommentsData))
            .catch(err => {
                res.status(400).json({ error: err.message })
            })
    })

    router.get('/api/post/:post_id/comments', function (req, res) {
        commentController.findByPostId(req.params.post_id)
            .then(commentsAll => res.status(200).json(commentsAll))
            .catch(err => res.status(400).json({ error: err.message }))
    })

    // If no API routes are hit, send the React app
    // router.all('*', function (req, res) {
    //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
    // });

}