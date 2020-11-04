const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const url = "https://i.stack.imgur.com/34AD2.jpg";

const PostsSchema = new Schema({
  user_id: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
  image: { type: String, default: url },
  caption: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
})

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;
