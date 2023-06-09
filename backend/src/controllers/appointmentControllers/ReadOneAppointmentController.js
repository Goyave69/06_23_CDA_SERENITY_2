const { appointment } = require("../../models");

async function readOneAppointmentController(req, res) {
  const { status, message } = await appointment.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneAppointmentController;
