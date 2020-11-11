const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  followers: [
    { type: mongoose.Schema.ObjectId, ref: 'User' }
  ]
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
