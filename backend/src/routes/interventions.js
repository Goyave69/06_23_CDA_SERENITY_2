const express = require("express");

const router = express.Router();

const readProgressionController = require("../controllers/interventionControllers/ReadProgressionController");

const readInterventionController = require("../controllers/interventionControllers/ReadInterventionController");
const readOneInterventionController = require("../controllers/interventionControllers/ReadOneInterventionController");
const updateInterventionController = require("../controllers/interventionControllers/UpdateInterventionController");
const createInterventionController = require("../controllers/interventionControllers/CreateInterventionController");
const deleteInterventionController = require("../controllers/interventionControllers/DeleteInterventionController");

router.get("/progression/:id", readProgressionController);

router.get("/", readInterventionController);
router.get("/:id", readOneInterventionController);
router.put("/:id", updateInterventionController);
router.post("/", createInterventionController);
router.delete("/:id", deleteInterventionController);

module.exports = router;
