const FitnessProgram = require('../model/fitnessModel');

exports.createFitnessProgram = async (req, res) => {
  try {
    const newFitnessProg = await FitnessProgram.create(req.body);

    res.status(201).json({
      status: 'Success',
      data: {
        newFitnessProg,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedProgram = await FitnessProgram.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'Success',
      data: {
        updatedProgram,
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
    const deleteProgram = await FitnessProgram.findByIdAndDelete(req.params.id);

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
