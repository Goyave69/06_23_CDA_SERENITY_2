const express = require("express");

const router = express.Router();

const createPatientFormController = require("../controllers/patientFormControllers/CreatePatientFormController");
const readOnePatientFormController = require("../controllers/patientFormControllers/ReadOnePatientFormController");
const updatePatientFormController = require("../controllers/patientFormControllers/UpdatePatientFormController");
const readPatientForm = require("../controllers/patientFormControllers/ReadPatientFormController");
const deletePatientFormController = require("../controllers/patientFormControllers/DeletePatientFormController");

router.get("/", readPatientForm);
router.get("/:id", readOnePatientFormController);
router.put("/:id", updatePatientFormController);
router.post("/", createPatientFormController);
router.delete("/:id", deletePatientFormController);

module.exports = router;
