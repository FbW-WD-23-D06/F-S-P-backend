import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = model("post", postSchema);
export default Post;
