const db = require("../models");

module.exports = {
    create: function (comment) {
        return db.Comments
            .create(comment)
    },

    findByPostId: function (post_id) {
        return db.Comments
            .find({ post_id: post_id })
    },

}