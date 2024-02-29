import { Post } from "../models/postsModel.js";
// import Users from "../models/";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ updatedAt: "descending" }).limit(10);
    res.json(!posts.length);
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
    if (!post) {
      throw new Error("Post nox exists");
    }
    res.json({ message: "Post found", post });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }
    res.json({ message: "Post deleted", deletedPost });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const newPost = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, newPost, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }
    res.json({ message: "Post updated", updatedPost });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updatePartialPost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
      }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }
    res.json({ message: "Post updated", updatedPost });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: error.message });
  }
};
