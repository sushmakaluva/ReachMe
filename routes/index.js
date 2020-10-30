const authController = require('../controllers/authController.js');
const path = require("path");

module.exports = function (router) {
    router.post('/api/signup', function (req, res) {

        const callback = function (err, dbUser) {
            if (err) res.status(400).json({ error: err.message })
            else res.status(200).json(dbUser);
        }

        authController.create(req.body, callback);
    })

    router.post('/api/login', function (req, res) {
        const callback = function (err, dbUsers) {
            if (err) res.status(400).json({ error: err.message })
            else res.status(200).json({ "message": "Authentication successful" });
        }

        authController.searchByEmail(req.body.email, req.body.password, callback)
    })

    // If no API routes are hit, send the React app
    router.all('*', function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });

}