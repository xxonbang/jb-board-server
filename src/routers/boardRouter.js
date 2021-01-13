import express from "express";
import routes from "../routes.js";
import {
  search,
  postUpload
} from "../controllers/postController.js";

const boardRouter = express.Router();

// HUMOR BOARD
// Search
// boardRouter.get(`/humor` + `/search`, search)

// boardRouter.get(routes.boardClassification(), search)

// boardRouter.get(`${routes.boardClassification()}/search`, search)
boardRouter.get('/humor/search', search)
// Upload
boardRouter.post(`/humor/upload`, postUpload);

// SOCIETY BOARD
// Search
// Upload


export default boardRouter;




// import express from "express";
// import routes from "../routes";
// import {
//   search,
//   postUpload
// } from "../controllers/postController.js";
//
// const postRouter = express.Router();
//
// // Search
//
// // Upload
// postRouter.post(routes.upload, postUpload);
//
// export default postRouter;



// // Upload
// boardRouter.get(routes.upload, onlyPrivate, getUpload);
// boardRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);
//
// // Video Detail
// boardRouter.get(routes.videoDetail(), videoDetail);
//
// // Edit Video
// boardRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
// boardRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
//
// // Delete Video
// boardRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);
