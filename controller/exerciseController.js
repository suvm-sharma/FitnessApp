const Exercise = require('../model/exerciseModel');
const ProgramModel = require('../model/fitnessModel');

exports.createExercise = async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);

    res.status(201).json({
      status: 'Success',
      data: {
        newExercise,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const removeExerciseFromProg = await ProgramModel.updateMany(
      {
        'exercises.ref': req.params.id,
      },
      {
        exercises: null,
      }
    );
    const exercise = await Exercise.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'Success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
