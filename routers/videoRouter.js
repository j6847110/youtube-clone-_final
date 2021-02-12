import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
