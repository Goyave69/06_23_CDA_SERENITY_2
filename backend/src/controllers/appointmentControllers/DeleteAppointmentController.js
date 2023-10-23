const { appointment_for_intervention } = require("../../models");

async function deleteAppointmentController(req, res) {
  const { status, message } = await appointment_for_intervention.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteAppointmentController;
