import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 15,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const User = model("user", userSchema);

export default User;
