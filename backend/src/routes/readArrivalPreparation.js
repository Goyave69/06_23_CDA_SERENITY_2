const express = require("express");

const router = express.Router();

const readReadArrivalPreparationController = require("../controllers/readArrivalPreparationControllers/ReadReadArrivalPreparationController");
const readOneReadArrivalPreparationController = require("../controllers/readArrivalPreparationControllers/ReadOneReadArrivalPreparationController");
const updateReadArrivalPreparationController = require("../controllers/readArrivalPreparationControllers/UpdateReadArrivalPreparationController");
const createReadArrivalPreparationController = require("../controllers/readArrivalPreparationControllers/CreateReadArrivalPreparationController");
const deleteReadArrivalPreparationController = require("../controllers/readArrivalPreparationControllers/DeleteReadArrivalPreparationController");

router.get("/", readReadArrivalPreparationController);
router.get("/:id", readOneReadArrivalPreparationController);
router.put("/:id", updateReadArrivalPreparationController);
router.post("/", createReadArrivalPreparationController);
router.delete("/:id", deleteReadArrivalPreparationController);

module.exports = router;
