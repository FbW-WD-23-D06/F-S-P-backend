import Post from "../models/postsModel.js";
import User from "../models/usersModel.js";
import bcrypt from "bcrypt";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUser = { userName, password: hashedPassword };
    await User.create(newUser);
    res
      .status(201)
      .json({ message: "New User added! 🐒", newUser: { userName } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const foundUser = await User.findOne({ userName });
    if (!foundUser) {
      return res.status(404).json({ message: "user not exists" });
    }
    const passwordsMatched = await bcrypt.compare(password, foundUser.password);
    if (!passwordsMatched) {
      return res.status(401).json({ message: "password is wrong" });
    }
    // convert the foundUser document to a plain js object
    // we need to delete de password field, because we don't want to send it to the client
    const user = foundUser.toObject();
    delete user.password;
    res.status(200).json({ message: "login successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPostsOfOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await Post.find({ author: id });
    if (!posts.length) {
      return res.status(404).json({ message: "Posts not found" });
    }
    res.status(200).json({ message: "Posts found", posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAllUsers = async (req, res) => {};

const updateUser = async (req, res) => {};

const updatePartialUser = async (req, res) => {};

export {
  getAllUsers,
  register,
  login,
  deleteAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
  updatePartialUser,
  getAllPostsOfOneUser,
};
