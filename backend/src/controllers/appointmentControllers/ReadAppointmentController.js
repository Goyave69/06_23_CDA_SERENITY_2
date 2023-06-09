const { appointment } = require("../../models");

async function readAppointmentController(req, res) {
  const { status, message } = await appointment.findAll();

  return res.status(status).json(message);
}

module.exports = readAppointmentController;
