const express = require("express");

const router = express.Router();

const createStepsInfoController = require("../controllers/stepsInfoControllers/CreateStepsInfoController");
const readOneStepsInfoController = require("../controllers/stepsInfoControllers/ReadOneStepsInfoController");
const updateStepsInfoController = require("../controllers/stepsInfoControllers/UpdateStepsInfoController");
const readStepsInfo = require("../controllers/stepsInfoControllers/ReadStepsInfoController");
const deleteStepsInfoController = require("../controllers/stepsInfoControllers/DeleteStepsInfoController");

router.get("/", readStepsInfo);
router.get("/:id", readOneStepsInfoController);
router.put("/:id", updateStepsInfoController);
router.post("/", createStepsInfoController);
router.delete("/:id", deleteStepsInfoController);

module.exports = router;
