const { done_administrative } = require("../../models");

async function readOneDoneAdministrativeController(req, res) {
  const { status, message } = await done_administrative.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneDoneAdministrativeController;
