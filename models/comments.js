const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    comment: { type: String},
    post_id:{ type: mongoose.Schema.ObjectId, ref: 'Posts', required: true },
    user_id: { type: mongoose.Schema.ObjectId, ref: 'Users', required: true },
    created_at: { type: Date, default: Date.now },
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
