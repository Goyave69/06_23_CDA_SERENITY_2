const { surgery } = require("../../models");

async function readSurgeryController(req, res) {
  const { status, message } = await surgery.findAll();

  return res.status(status).json(message);
}

module.exports = readSurgeryController;
