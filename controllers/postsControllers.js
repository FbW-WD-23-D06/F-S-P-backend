import { Post } from "../models/postsModel.js";

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

export const deleteAllPosts = async (req, res) => {
  try {
    await Post.deleteMany();
    res.status(200).json({ msg: "All users deleted" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.json({ message: "Post found", post });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updatePostKey = async (req, res) => {
  try {
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};
