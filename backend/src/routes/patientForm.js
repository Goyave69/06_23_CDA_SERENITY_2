const express = require("express");

const router = express.Router();

const createPatientFormController = require("../controllers/patientFormControllers/CreatePatientFormController");
const readOnePatientFormController = require("../controllers/patientFormControllers/ReadOnePatientFormController");
const updateUserController = require("../controllers/userControllers/UpdateUserController");
const readPatientForm = require("../controllers/patientFormControllers/ReadPatientFormController");
const deletePatientFormController = require("../controllers/patientFormControllers/DeletePatientFormController");

router.get("/", readPatientForm);
router.get("/:id", readOnePatientFormController);
router.put("/:id", updateUserController);
router.post("/", createPatientFormController);
router.delete("/:id", deletePatientFormController);

module.exports = router;
