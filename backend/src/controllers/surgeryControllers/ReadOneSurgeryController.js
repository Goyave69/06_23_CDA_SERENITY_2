const { surgery } = require("../../models");

async function readOneSurgeryController(req, res) {
  const { status, message } = await surgery.find(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = readOneSurgeryController;
