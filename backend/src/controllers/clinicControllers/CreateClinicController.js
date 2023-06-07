const { clinic } = require("../../models");

async function createClinicController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await clinic.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createClinicController;
