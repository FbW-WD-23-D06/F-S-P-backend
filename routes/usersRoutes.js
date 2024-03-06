import express from "express";
import {
  getAllUsers,
  register,
  login,
  // deleteAllUsers,
  getOneUser,
  deleteUser,
  // updateUser,
  // updatePartialUser,
  getAllPostsOfOneUser,
} from "../controllers/usersControllers.js";

import { userValidationRules, validate } from "../middleware/userValidator.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers);

usersRouter.route("/register").post(register);
usersRouter.route("/login").post(login);

// usersRouter.route("/delete-all").delete(deleteAllUsers);

usersRouter.get("/posts/:id", getAllPostsOfOneUser);

usersRouter
  .route("/:id")
  .get(getOneUser)
  // .put(updateUser)
  // .patch(updatePartialUser)
  .delete(deleteUser);

export { usersRouter, usersMainPath };
