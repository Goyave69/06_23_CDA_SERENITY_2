const { done_administrative } = require("../../models");

async function readByInterventionIdDoneAdministrativeController(req, res) {
  const { status, message } = await done_administrative.getByInterventionId(
    parseInt(req.params.interventionId, 10)
  );

  return res.status(status).json(message);
}

module.exports = readByInterventionIdDoneAdministrativeController;
