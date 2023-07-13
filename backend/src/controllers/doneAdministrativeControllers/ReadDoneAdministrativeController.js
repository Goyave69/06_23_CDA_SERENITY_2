const { done_administrative } = require("../../models");

async function readDoneAdministrativeController(req, res) {
  const { status, message } = await done_administrative.findAll();

  return res.status(status).json(message);
}

module.exports = readDoneAdministrativeController;
