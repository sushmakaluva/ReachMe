const db = require("../models");

module.exports = {

  addfollower: function (follower_id, following_id) {
    return db.Friends
      .create({ follower: follower_id, following: following_id })
  },

  removefollower: function (follower_id, following_id) {
    return db.Friends
      .deleteMany({ follower: follower_id, following: following_id })
  },

  ListUsers: function () {
    return db.Users
      .find({})
  },

  FetchFriends:function(user_id){
    return db.Friends
    .find({follower:user_id})
  },

  

}
