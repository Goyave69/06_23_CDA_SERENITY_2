const { item } = require("../../models");

async function readOneItemController(req, res) {
  const { status, message } = await item.find(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = readOneItemController;
