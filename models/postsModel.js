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

export const Post = model("posts", postSchema);
