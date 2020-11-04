export default {

    set: function (user) {
        localStorage.setItem('user_session', JSON.stringify(user));
    },

    get: function () {
        return JSON.parse(localStorage.getItem('user_session')) || {};
    },

    delete: function () {
        localStorage.removeItem('user_session');
    }

}