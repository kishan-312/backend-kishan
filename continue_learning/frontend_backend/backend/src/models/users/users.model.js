import mongoose from "mongoose";

// name,email,password

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      lowercase: true,
      unique: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },

  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", usersSchema);
