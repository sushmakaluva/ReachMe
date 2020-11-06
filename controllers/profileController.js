const db = require("../models");

module.exports = {
    displayProfile: function (user_id) {
        return db.Users
            .findOne({ user: { user_id }
            })
}};
