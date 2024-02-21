import express from "express";
import { getAllPosts, addPost } from "../controllers/postsControllers.js";

const postsRouter = express.Router();

const postsMainPath = "/posts";

postsRouter.route("/").get(getAllPosts).post(addPost);

postsRouter
  .route("/:id")
  .get((req, res) => {
    res.send("Hello from get one postRoutes");
  })
  .put((req, res) => {
    res.send("Hello from put one postRoutes");
  })
  .delete((req, res) => {
    res.send("Hello from delete one postRoutes");
  });

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
