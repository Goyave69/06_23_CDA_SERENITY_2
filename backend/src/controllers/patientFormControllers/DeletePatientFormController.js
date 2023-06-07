const { patient_form } = require("../../models");

async function deletePatientFormController(req, res) {
  const { status, message } = await patient_form.delete(
    parseInt(req.params.id, 10)
  );
  return res.status(status).json(message);
}

module.exports = deletePatientFormController;
