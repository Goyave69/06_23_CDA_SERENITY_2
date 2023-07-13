const { surgery } = require("../../models");

async function createSurgeryController(req, res) {
  const { status, message } = await surgery.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createSurgeryController;
