const { appointment_for_intervention } = require("../../models");

async function readOneAppointmentController(req, res) {
  const { status, message } = await appointment_for_intervention.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneAppointmentController;
