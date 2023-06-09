const { appointment } = require("../../models");

async function updateAppointmentController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await appointment.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateAppointmentController;
