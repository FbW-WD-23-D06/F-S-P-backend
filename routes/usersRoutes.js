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
import { tokenValid } from "../middleware/users/tokenValid.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers);

usersRouter.route("/register").post(userValidationRules, register);
usersRouter.route("/login").post(userValidationRules, login);
usersRouter.get("/posts/:id", getAllPostsOfOneUser);

usersRouter.route("/token-valid").post(tokenValid);

usersRouter.route("/:id").get(getOneUser).delete(deleteUser);

export { usersRouter, usersMainPath };
