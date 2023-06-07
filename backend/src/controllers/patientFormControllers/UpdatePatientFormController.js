const { patient_form } = require("../../models");

async function updatePatientFormController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await patient_form.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updatePatientFormController;
