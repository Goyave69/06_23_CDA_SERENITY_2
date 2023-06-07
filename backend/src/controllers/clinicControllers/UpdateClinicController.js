const { clinic } = require("../../models");

async function updateClinicController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await clinic.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateClinicController;
