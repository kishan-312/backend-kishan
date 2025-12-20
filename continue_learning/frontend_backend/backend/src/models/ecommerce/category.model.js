import mongoose from "mongoose";

// name

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
  },

  {
    timestamps: true,
  }
);

export const Category = mongoose.model("Category", categorySchema);
