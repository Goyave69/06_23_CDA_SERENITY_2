const { clinic_has_specialist } = require("../../models");

async function updateSpecialistClinicController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await clinic_has_specialist.updateClinic(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateSpecialistClinicController;
