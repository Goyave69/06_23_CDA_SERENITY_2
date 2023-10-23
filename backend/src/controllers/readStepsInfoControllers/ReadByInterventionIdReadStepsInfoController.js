const { read_steps_info } = require("../../models");

async function readByInterventionIdReadStepsInfoController(req, res) {
  const { status, message } = await read_steps_info.getByInterventionId(
    parseInt(req.params.interventionId, 10)
  );

  return res.status(status).json(message);
}

module.exports = readByInterventionIdReadStepsInfoController;
