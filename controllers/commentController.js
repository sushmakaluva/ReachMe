const db = require("../models");

module.exports = {
    create: function (post_id, user_id, comment) {
        return db.Comments
            .create({ post_id, user_id, comment })
    },

    findByPostId: function (post_id) {
        return db.Comments
            .find({ post_id: post_id })
            .populate('user_id', ['first_name', 'last_name'], db.Users)
    },

}