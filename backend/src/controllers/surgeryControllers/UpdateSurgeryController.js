const { surgery } = require("../../models");

async function updateSurgeryController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await surgery.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateSurgeryController;
