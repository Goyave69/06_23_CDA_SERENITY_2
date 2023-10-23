const { appointment_for_intervention } = require("../../models");

async function readAppointmentController(req, res) {
  const { status, message } = await appointment_for_intervention.findAll();

  return res.status(status).json(message);
}

module.exports = readAppointmentController;
