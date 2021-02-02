import express from "express";
import { join, login, logout } from "../controllers/userControllers";
import { home, search } from "../controllers/videoControllers";
import routes from "../routes";

const globalRouter = express.Router();
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
export default globalRouter;