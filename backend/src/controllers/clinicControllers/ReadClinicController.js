const { clinic } = require("../../models");

async function readClinicController(req, res) {
  const { status, message } = await clinic.findAll();

  return res.status(status).json(message);
}

module.exports = readClinicController;
