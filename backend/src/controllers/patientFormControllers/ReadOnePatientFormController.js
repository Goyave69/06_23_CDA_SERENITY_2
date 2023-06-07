const { patient_form } = require("../../models");

async function readOnePatientFormController(req, res) {
  const { status, message } = await patient_form.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOnePatientFormController;
