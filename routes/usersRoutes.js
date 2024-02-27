import express from "express";
import {
  getAllUsers,
  addUser,
  // deleteAllUsers,
  getOneUser,
  deleteUser,
  // updateUser,
  // updatePartialUser,
} from "../controllers/usersControllers.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers).post(addUser);

// usersRouter.route("/delete-all").delete(deleteAllUsers);

usersRouter
  .route("/:id")
  .get(getOneUser)
  // .put(updateUser)
  // .patch(updatePartialUser)
  .delete(deleteUser);

const usersRoutesInfos = [
  { path: `${usersMainPath}`, method: "GET", description: "Get all users" },
  {
    path: `${usersMainPath}`,
    method: "POST",
    description: "Create a new user",
  },
  { path: `${usersMainPath}:id`, method: "GET", description: "Get one user" },
  // {
  //   path: `${usersMainPath}:id`,
  //   method: "PUT",
  //   description: "Update one user",
  // },
  {
    path: `${usersMainPath}:id`,
    method: "DELETE",
    description: "Delete one user",
  },
];

export { usersRouter, usersMainPath };
