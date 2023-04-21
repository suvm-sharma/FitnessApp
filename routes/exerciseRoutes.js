const express = require('express');
const exerciseController = require('../controller/exerciseController');

const router = express.Router();

router.post('/createExercise', exerciseController.createExercise);

router.route('/:id').delete(exerciseController.deleteUser);

module.exports = router;
