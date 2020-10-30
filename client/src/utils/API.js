import axios from "axios";

export default {

    getLoginPage: function () {
        return axios.get("/api/login");
    },

    // login credentials
    userLogin: function (userData) {
        return axios.post("/api/login", userData);
    },
    // signup credentials
    userSignup: function (signupData) {
        return axios.post("/api/signup", signupData);
    },
};
