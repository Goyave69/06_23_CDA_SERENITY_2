const { done_administrative } = require("../../models");

async function CreateDoneAdministrativeController(req, res) {
  const { status, message } = await done_administrative.insert(req.body);

  return res.status(status).json(message);
}

module.exports = CreateDoneAdministrativeController;
