import axios from "axios";

export default {
    
    // login credentials
    userLogin: function (userData) {
        return axios.post("/api/login", userData);
    },
    // signup credentials
    userSignup: function (signupData) {
        return axios.post("/api/signup", signupData);
    },
    // add post data to db
    addPost:function(postData){
        return axios.post("/api/posts",postData);
    },
    // get all posts
    getPosts: function() {
        return axios.get("/api/posts");
      },

    // get all comments
    getComments: function(){
        return axios.get("/api/post/:post_id/comments");
    } 
    
};
