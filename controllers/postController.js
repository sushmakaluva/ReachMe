const db = require("../models");

module.exports = {
    create: function (post) {
        return db.Posts
            .create(post)
    },
    
    displayPosts:function () {
        return db.Posts
            .find({})
            // .populate('creator', ['fullname', 'username'])
            
    },
}