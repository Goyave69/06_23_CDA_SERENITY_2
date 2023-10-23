const { intervention } = require("../../models");

async function readInterventionController(req, res) {
  const searchIntervention = await intervention.nextPatientIntervention(
    req.params.id
  );

  if (searchIntervention.status !== 200) {
    return res.status(searchIntervention.status).json({});
  }

  const { status, message } = await intervention.progression(
    searchIntervention.message.id
  );

  return res.status(status).json(message);
}

module.exports = readInterventionController;
