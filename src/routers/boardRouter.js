import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controllers/boardController";
import { uploadVideo, onlyPrivate } from "../middlewares";

const boardRouter = express.Router();

// Upload
boardRouter.get(routes.upload, onlyPrivate, getUpload);
boardRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

// Video Detail
boardRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
boardRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
boardRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

// Delete Video
boardRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default boardRouter;
