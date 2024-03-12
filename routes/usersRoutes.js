import express from "express";
import {
  getAllUsers,
  register,
  login,
  getOneUser,
  deleteUser,
  getAllPostsOfOneUser,
} from "../controllers/usersControllers.js";

import { userValidationRules } from "../middleware/users/userValidator.js";
import { authenticate } from "../middleware/users/authenticate.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers);

usersRouter.route("/register").post(userValidationRules, register);
usersRouter.route("/login").post(userValidationRules, authenticate, login);

usersRouter.get("/posts/:id", getAllPostsOfOneUser);

usersRouter.route("/:id").get(getOneUser).delete(deleteUser);

export { usersRouter, usersMainPath };
