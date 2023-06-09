const express = require("express");

const router = express.Router();

const CreateAppointmentController = require("../controllers/appointmentControllers/CreateAppointmentController");
const ReadAppointmentController = require("../controllers/appointmentControllers/ReadAppointmentController");

const ReadOneAppointmentController = require("../controllers/appointmentControllers/ReadOneAppointmentController");

const DeleteAppointmentController = require("../controllers/appointmentControllers/DeleteAppointmentController");

const UpdateAppointmentController = require("../controllers/appointmentControllers/UpdateAppointmentController");

router.post("/", CreateAppointmentController);
router.get("/", ReadAppointmentController);
router.get("/:id", ReadOneAppointmentController);
router.delete("/:id", DeleteAppointmentController);
router.put("/:id", UpdateAppointmentController);

module.exports = router;
