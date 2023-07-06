const { specialist_has_speciality } = require("../../models");

async function updateSpecialistClinicController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await specialist_has_speciality.updateSpeciality(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateSpecialistClinicController;
