import { Post } from "../models/post.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};
