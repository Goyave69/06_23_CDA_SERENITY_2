const { speciality } = require("../../models");

async function readSpecialityController(req, res) {
  const { status, message } = await speciality.findAll();

  return res.status(status).json(message);
}

module.exports = readSpecialityController;
