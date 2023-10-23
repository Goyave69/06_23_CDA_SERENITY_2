const { specialist } = require("../../models");

async function createSpecialistController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await specialist.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createSpecialistController;
