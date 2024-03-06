import express from "express";
import {
  getAllPosts,
  addPost,
  deleteAllPosts,
  getOnePost,
  deletePost,
  updatePost,
  updatePartialPost,
  getAllPostsWithAuthorInformations,
} from "../controllers/postsControllers.js";

import { postsValidationRules } from "../middleware/postsValidator.js";

const postsRouter = express.Router();

const postsMainPath = "/posts";

postsRouter.route("/").get(getAllPosts).post(postsValidationRules, addPost);

postsRouter.get("/author-infos", getAllPostsWithAuthorInformations);

postsRouter.route("/delete-all").delete(deleteAllPosts);

postsRouter
  .route("/:id")
  .get(getOnePost)
  .put(updatePost)
  .patch(updatePartialPost)
  .delete(deletePost);

export { postsRouter, postsMainPath };
