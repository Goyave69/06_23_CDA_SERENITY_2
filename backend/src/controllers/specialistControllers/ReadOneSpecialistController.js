const { specialist } = require("../../models");

async function readOneSpecialistController(req, res) {
  const { status, message } = await specialist.find(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = readOneSpecialistController;
