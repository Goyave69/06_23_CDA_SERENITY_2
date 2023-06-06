const { item } = require("../../models");

async function updateItemController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await item.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateItemController;
