const db = require("../models");

module.exports = {
    create: function (post) {
        return db.Posts
            .create(post)
    },

    displayPosts: function () {
        return db.Posts
            .find({})
            .populate('user_id', ['first_name', 'last_name'], db.Users)

    },
}