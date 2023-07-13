const express = require("express");

const router = express.Router();

const readSurgeryController = require("../controllers/surgeryControllers/ReadSurgeryController");
const readOneSurgeryController = require("../controllers/surgeryControllers/ReadOneSurgeryController");
const updateSurgeryController = require("../controllers/surgeryControllers/UpdateSurgeryController");
const createSurgeryController = require("../controllers/surgeryControllers/CreateSurgeryController");
const deleteSurgeryController = require("../controllers/surgeryControllers/DeleteSurgeryController");

router.get("/", readSurgeryController);
router.get("/:id", readOneSurgeryController);
router.put("/:id", updateSurgeryController);
router.post("/", createSurgeryController);
router.delete("/:id", deleteSurgeryController);

module.exports = router;
