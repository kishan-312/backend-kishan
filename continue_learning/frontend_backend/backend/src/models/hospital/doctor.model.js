import mongoose from "mongoose";

// alag schema banavi devo so fase nai multiple fields aavi sake

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      dfault: 0,
    },
    qualification: {
      type: String,
      required: true,
    },
    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
