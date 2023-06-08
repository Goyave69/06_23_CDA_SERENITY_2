const express = require("express");

const router = express.Router();

const readSpecialistController = require("../controllers/specialistControllers/ReadSpecialistController");
const readOneSpecialistController = require("../controllers/specialistControllers/ReadOneSpecialistController");
const updateSpecialistController = require("../controllers/specialistControllers/UpdateSpecialistController");
const createSpecialistController = require("../controllers/specialistControllers/CreateSpecialistController");
const deleteSpecialistController = require("../controllers/specialistControllers/DeleteSpecialistController");

router.get("/", readSpecialistController);
router.get("/:id", readOneSpecialistController);
router.put("/:id", updateSpecialistController);
router.post("/", createSpecialistController);
router.delete("/:id", deleteSpecialistController);

module.exports = router;
