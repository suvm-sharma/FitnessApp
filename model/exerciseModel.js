const mongoose = require("mongoose");

const exerciseModel = new mongoose.Schema({
  exerciseName: {
    type: String,
    required: [true, "An exercise must have a name"],
    trim: true,
  },
  exerciseLength: {
    type: Number,
    required: [true, "Exercise length must be in minutes"],
    min: [1, "Exercise length must be at least 1 minute"],
  },
});

const Exercise = mongoose.model("Exercise", exerciseModel);
module.exports = Exercise;
