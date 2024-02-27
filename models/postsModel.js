import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = model("post", postSchema);
export default Post;
