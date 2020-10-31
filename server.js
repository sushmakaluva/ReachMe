import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'

// app config
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
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


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
