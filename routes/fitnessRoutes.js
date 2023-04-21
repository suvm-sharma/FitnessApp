const express = require("express");
const fitnessController = require("../controller/fitnessController");

const router = express.Router();

router.post("/createFitnessProgram", fitnessController.createFitnessProgram);

router
  .route("/:id")
  .delete(fitnessController.deleteUser)
  .patch(fitnessController.updateUser);

module.exports = router;
