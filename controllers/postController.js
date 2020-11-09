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
            .sort({ created_at: 'descending' })

    },

    deletePost: function (post_id) {
        return db.Posts
            .deleteOne({ _id: post_id })
    },

    displayPostsByUserId: function (user_id) {
        return db.Posts
            .find({ user_id: user_id })
            .populate('user_id', ['first_name', 'last_name'], db.Users)
            .sort({ created_at: 'descending' })
    },
}