const { item } = require("../../models");

async function createItemController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await item.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createItemController;
