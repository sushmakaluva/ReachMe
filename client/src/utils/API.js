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
    addPost: function (postData) {
        return axios.post("/api/posts", postData);
    },

    // get all posts
    getPosts: function () {
        return axios.get("/api/posts");
    },

    // add comment
    addComment: function (comment, post_id, user_id) {
        return axios.post(`/api/post/${post_id}/comment`, { comment, user_id })
    },

    // get all comments
    getComments: function (post_id) {
        return axios.get(`/api/post/${post_id}/comments`);
    },

    // delete comment
    deleteComment: function (comment_id) {
        return axios.delete(`/api/comments/${comment_id}`);
    },

    // get all posts of a user
    userPosts: function (user_id) {
        return axios.get(`/api/user/${user_id}/posts`);
    },

    // delete user post
    deletePost: function (post_id) {
        return axios.delete(`/api/post/${post_id}`);
    },

    // get username from user_id
    getUserNameFromId: function (user_id) {
        return axios.get(`/api/user/${user_id}`);
    },

    // get all users list
    getAllUsers: function () {
        return axios.get('/api/friends');
    },

    // follow a friend
    followFriend: function (friendData) {
        return axios.post("/api/friends", friendData);
    },

    //unfollow a friend
    unFollowFriend: function (friendData) {
        return axios.delete("/api/friends", { data: friendData })
    },

    // fetch friends page
    fetchFriendsofUser: function(user_id){
        return axios.get(`/api/friends/${user_id}`)
    }
};
