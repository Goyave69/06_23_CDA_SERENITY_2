const { specialist } = require("../../models");

async function updateSpecialistController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await specialist.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateSpecialistController;
