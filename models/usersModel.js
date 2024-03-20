import { Schema, model } from "mongoose";

const avatarImgSchema = new Schema(
  {
    url: {
      type: String,
      default: "https://ionicframework.com/docs/img/demos/avatar.svg",
    },
    id: String,
  },
  { timestamps: true, versionKey: false, id: false }
);

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 15,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    avatarImg: avatarImgSchema,
  },
  { timestamps: true, versionKey: false }
);
const User = model("user", userSchema);

export default User;
