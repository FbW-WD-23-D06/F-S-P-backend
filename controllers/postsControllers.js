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

export const addPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = { title, content };
    await Post.create(newPost);
    res.json({ message: "new post addedd", newPost });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};
