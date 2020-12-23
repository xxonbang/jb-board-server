// Global
const HOME = "/";
const SIGNUP = "/signup";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// Board - Humor
const HUMOR_BOARD = "/board/humor";
const HUMOR_UPLOAD = "/upload";
const HUMOR_POST_NO = "/:id";
const HUMOR_EDIT_POST = "/:id/edit";
const HUMOR_DELETE_POST = "/:id/delete";

// Board - Society
const SOCIETY_BOARD = "/board/society";
const SOCIETY_UPLOAD = "/upload";
const SOCIETY_POST_NO = "/:id";
const SOCIETY_EDIT_POST = "/:id/edit";
const SOCIETY_DELETE_POST = "/:id/delete";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Facebook
const FB = "/auth/facebook";
const FB_CALLBACK = "/auth/facebook/callback";

// API
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

const routes = {
    home: HOME,
    signup: SIGNUP,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    // videos: VIDEOS,
    // upload: UPLOAD,
    // videoDetail: (id) => {
    //     if(id) {
    //         return `/videos/${id}`;
    //     } else {
    //         return VIDEO_DETAIL;
    //     }
    // },
    // editVideo: (id) => {
    //     if (id) {
    //         return `/videos/${id}/edit`;
    //     } else {
    //         return EDIT_VIDEO;
    //     }
    // },
    // deleteVideo: (id) => {
    //     if (id) {
    //         return `/videos/${id}/delete`;
    //     } else {
    //         return DELETE_VIDEO;
    //     }
    // },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME,
    facebook: FB,
    facebookCallback: FB_CALLBACK,
    api: API,
    registerView: REGISTER_VIEW,
    addComment: ADD_COMMENT
};

export default routes;
