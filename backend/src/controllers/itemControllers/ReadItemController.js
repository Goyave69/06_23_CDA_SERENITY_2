const { item } = require("../../models");

async function readItemController(req, res) {
  const { status, message } = await item.findAll();

  return res.status(status).json(message);
}

module.exports = readItemController;
