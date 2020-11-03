const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  user_id: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
  image: { data: Buffer, contentType: String },
  caption: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
})

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;
