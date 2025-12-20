import mongoose from "mongoose";

// content,complete,user
const subTodosSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "content is required"],
    },

    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  }
);

export const SubTodos = mongoose.model("SubTodos", subTodosSchema);
