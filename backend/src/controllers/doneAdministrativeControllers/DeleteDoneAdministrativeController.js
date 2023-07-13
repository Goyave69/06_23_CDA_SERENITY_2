const { done_administrative } = require("../../models");

async function deleteDoneAdministrativeController(req, res) {
  const { status, message } = await done_administrative.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteDoneAdministrativeController;
