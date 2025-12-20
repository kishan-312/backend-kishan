import mongoose from "mongoose";

// content,complete,user,subtodos
const todosSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodos",
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Todos = mongoose.model("Todos", todosSchema);
