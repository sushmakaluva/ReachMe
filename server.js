const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const path = require("path");
var session = require('express-session');
const PORT = process.env.PORT || 3001;
const app = express();
var cookieParser = require('cookie-parser');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
// app.use(cookieParser());

// app.use(session({
//   secret: 'keyboard cat',
//   cookie: { maxAge: 60000 },
//   name: 'reachme'
// }))

// Access the session as req.session
// app.get('/', function (req, res, next) {

//   if (req.session.views) {
//     req.session.views++
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<p>views: ' + req.session.views + '</p>')
//     res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
//     res.end()
//   } else {
//     req.session.views = 1
//     res.end('welcome to the session demo. refresh!')
//   }
// })


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes')(router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reachme_db");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

