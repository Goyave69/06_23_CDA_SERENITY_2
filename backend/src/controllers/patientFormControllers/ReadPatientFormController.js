const { patient_form } = require("../../models");

async function readPatientFormController(req, res) {
  const { status, message } = await patient_form.findAll();

  return res.status(status).json(message);
}

module.exports = readPatientFormController;
