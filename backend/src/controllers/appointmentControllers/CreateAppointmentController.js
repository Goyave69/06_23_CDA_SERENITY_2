const { appointment_for_intervention } = require("../../models");

async function createAppointmentController(req, res) {
  const { status, message } = await appointment_for_intervention.insert(
    req.body
  );

  return res.status(status).json(message);
}

module.exports = createAppointmentController;
