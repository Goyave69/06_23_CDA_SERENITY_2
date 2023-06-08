const { specialist } = require("../../models");

async function deleteSpecialistController(req, res) {
  const { status, message } = await specialist.delete(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = deleteSpecialistController;
