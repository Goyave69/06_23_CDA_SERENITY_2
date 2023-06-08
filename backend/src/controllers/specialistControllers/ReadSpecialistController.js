const { specialist } = require("../../models");

async function readSpecialistController(req, res) {
  const { status, message } = await specialist.findAll();

  return res.status(status).json(message);
}

module.exports = readSpecialistController;
