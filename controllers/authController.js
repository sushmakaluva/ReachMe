const db = require("../models");

module.exports = {
    create: function (user, callback) {
        db.Users
            .create(user)
            .then(dbRes => callback(null, dbRes))
            .catch(err => callback(err, null))
    },

    searchByEmail: function (inputEmail, inputPassword, callback) {
        db.Users
            .find({ email: inputEmail })
            .then(dbRes => {
                if (dbRes.length === 0)
                    callback(new Error("User not found"))
                else if (dbRes.length === 1 && dbRes[0].password !== inputPassword)
                    callback(new Error("Password incorrect"))
                else if (dbRes.length === 1 && dbRes[0].password === inputPassword)
                    callback(null, dbRes)
            })
            .catch(err => callback(err, null))
    }
}