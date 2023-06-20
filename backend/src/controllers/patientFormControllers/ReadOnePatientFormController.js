const { patient_form } = require("../../models");
const { formatTime } = require("../../services/DateHelper");

async function readOnePatientFormController(req, res) {
  const { status, message } = await patient_form.find(
    parseInt(req.params.id, 10)
  );

  message.birthdate = formatTime(message.birthdate);

  return res.status(status).json(message);
}

module.exports = readOnePatientFormController;
