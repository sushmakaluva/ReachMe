const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
  follower: { type: mongoose.Schema.ObjectId, ref: 'User' },
  following: { type: mongoose.Schema.ObjectId, ref: 'User' },
  created_at: { type: Date, default: Date.now }
});

const Friends = mongoose.model("Friends", FriendsSchema);

module.exports = Friends;
