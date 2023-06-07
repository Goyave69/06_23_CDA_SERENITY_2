const { clinic } = require("../../models");

async function readOneClinicController(req, res) {
  const { status, message } = await clinic.find(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = readOneClinicController;
