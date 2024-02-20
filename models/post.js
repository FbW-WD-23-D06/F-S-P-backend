import { Schema, model } from "mongoose";

const postSchema = Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Post = model("post", postSchema);