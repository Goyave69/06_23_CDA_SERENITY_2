const { item } = require("../../models");

async function deleteItemController(req, res) {
  const { status, message } = await item.delete(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = deleteItemController;
