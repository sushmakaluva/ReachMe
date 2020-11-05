const db = require("../models");

module.exports = {
    create: function (user) {
        return db.Users
            .create(user)
    },

    searchByEmail: function (inputEmail, inputPassword) {
        return db.Users
            .find({ email: inputEmail })
            .then(dbRes => {
                if (dbRes.length === 0)
                    throw new Error("User not found")
                else if (dbRes.length === 1 && dbRes[0].password !== inputPassword)
                    throw new Error("Password incorrect")
                else if (dbRes.length === 1 && dbRes[0].password === inputPassword)
                    return Promise.resolve(dbRes)
            })

    },

    SearchFriends: function () {
        return db.Users.find({})
        // .populate(‘friends’, [‘fullname’, ‘username’], { limit: 10 })
        // .exec()
    }
}