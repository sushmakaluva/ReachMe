export default {

    set: function (user) {
        localStorage.setItem('user_session', JSON.stringify(user));
    },

    get: function () {
        return JSON.parse(localStorage.getItem('user_session'));
    },

    delete: function () {
        localStorage.removeItem('user_session');
    },

    getUserName:function () {
        return this.get().first_name + " " + this.get().last_name;
      }

}