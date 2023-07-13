const { surgery } = require("../../models");

async function deleteSurgeryController(req, res) {
  const { status, message } = await surgery.delete(parseInt(req.params.id, 10));
  return res.status(status).json(message);
}

module.exports = deleteSurgeryController;
