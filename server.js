<<<<<<< HEAD
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'

// app config
=======
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
>>>>>>> df480b888a9da2f4fb0f09e4b566948e9d413fcf
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
<<<<<<< HEAD
app.use(cors())
=======
app.use(router);
>>>>>>> df480b888a9da2f4fb0f09e4b566948e9d413fcf

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
<<<<<<< HEAD
app.get('/', (req, res) => res.status(200).send('hello world'));
// app.use(routes);

// Connect to the Mongo DB

const connection_url = 'mongodb+srv://admin:<iFo0nsf7aKodl7uB@cluster0.w6bts.mongodb.net/reachmeDB?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
  userCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  
mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

process.env.MONGODB_URI || "mongodb://localhost/users";

=======
require('./routes')(router);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reachme_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
>>>>>>> df480b888a9da2f4fb0f09e4b566948e9d413fcf

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

