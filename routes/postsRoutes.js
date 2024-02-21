import express from "express";
import {
  getAllPosts,
  addPost,
  deleteAllPosts,
  getOnePost,
  deletePost,
  updatePost,
} from "../controllers/postsControllers.js";

const postsRouter = express.Router();

const postsMainPath = "/posts";

postsRouter.route("/").get(getAllPosts).post(addPost);

postsRouter.route("/delete-all").delete(deleteAllPosts);

postsRouter
  .route("/:id")
  .get(getOnePost)
  .put(updatePost)
  .patch((req, res) => {
    res.send("Hello from patch");
  })
  .delete(deletePost);

const postsRoutesInfos = [
  { path: `${postsMainPath}`, method: "GET", description: "Get all posts" },
  {
    path: `${postsMainPath}`,
    method: "POST",
    description: "Create a new post",
  },
  { path: `${postsMainPath}:id`, method: "GET", description: "Get one post" },
  {
    path: `${postsMainPath}:id`,
    method: "PUT",
    description: "Update one post",
  },
  {
    path: `${postsMainPath}:id`,
    method: "DELETE",
    description: "Delete one post",
  },
];

export { postsRoutesInfos, postsRouter, postsMainPath };
