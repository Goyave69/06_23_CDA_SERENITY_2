const { appointment } = require("../../models");

async function createAppointmentController(req, res) {
  const { status, message } = await appointment.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createAppointmentController;
