const express = require("express");

const router = express.Router();

const ReadByInterventionIdReadStepsInfoController = require("../controllers/readStepsInfoControllers/ReadByInterventionIdReadStepsInfoController");

const readReadStepsInfoController = require("../controllers/readStepsInfoControllers/ReadReadStepsInfoController");
const readOneReadStepsInfoController = require("../controllers/readStepsInfoControllers/ReadOneReadStepsInfoController");
const updateReadStepsInfoController = require("../controllers/readStepsInfoControllers/UpdateReadStepsInfoController");
const createReadStepsInfoController = require("../controllers/readStepsInfoControllers/CreateReadStepsInfoController");
const deleteReadStepsInfoController = require("../controllers/readStepsInfoControllers/DeleteReadStepsInfoController");

router.get(
  "/byInterventionId/:interventionId",
  ReadByInterventionIdReadStepsInfoController
);

router.get("/", readReadStepsInfoController);
router.get("/:id", readOneReadStepsInfoController);
router.put("/:id", updateReadStepsInfoController);
router.post("/", createReadStepsInfoController);
router.delete("/:id", deleteReadStepsInfoController);

module.exports = router;
