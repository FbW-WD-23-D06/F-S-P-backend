import express from "express";
import {
  getAllUsers,
  register,
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

usersRouter
  .route("/")
  .get(getAllUsers)
  .post(userValidationRules, validate, register);

// usersRouter.route("/delete-all").delete(deleteAllUsers);

usersRouter.get("/posts/:id", getAllPostsOfOneUser);

usersRouter
  .route("/:id")
  .get(getOneUser)
  // .put(updateUser)
  // .patch(updatePartialUser)
  .delete(deleteUser);

export { usersRouter, usersMainPath };
