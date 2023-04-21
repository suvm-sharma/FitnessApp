const mongoose = require("mongoose");
const exerciseSchema = require("../model/exerciseModel");

const fitnessModel = new mongoose.Schema({
  programName: {
    type: String,
    required: [true, "A user must have Program Name"],
    trim: true,
  },
  exercises: {
    ref: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exercise",
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
  },
});

const FitnessProgram = mongoose.model("FitnessProgram", fitnessModel);
module.exports = FitnessProgram;
