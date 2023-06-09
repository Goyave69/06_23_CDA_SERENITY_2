const { appointment } = require("../../models");

async function deleteAppointmentController(req, res) {
  const { status, message } = await appointment.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteAppointmentController;
