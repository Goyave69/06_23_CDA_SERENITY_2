const { clinic_hours } = require("../../models");

async function createClinicController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await clinic_hours.insert(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = createClinicController;
