const db = require("../models");

module.exports = {

  displayPostsByUserId: function (user_id) {
    return db.Posts
      .find({user_id: user_id })
  },
}