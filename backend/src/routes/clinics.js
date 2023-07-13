const express = require("express");

const router = express.Router();

const readClinicController = require("../controllers/clinicControllers/ReadClinicController");
const readOneClinicController = require("../controllers/clinicControllers/ReadOneClinicController");
const updateClinicController = require("../controllers/clinicControllers/UpdateClinicController");
const createClinicController = require("../controllers/clinicControllers/CreateClinicController");
const deleteClinicController = require("../controllers/clinicControllers/DeleteClinicController");

router.get("/", readClinicController);
router.get("/:id", readOneClinicController);
router.put("/:id", updateClinicController);
router.post("/", createClinicController);
router.delete("/:id", deleteClinicController);

module.exports = router;
