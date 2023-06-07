const { intervention } = require("../../models");

async function readOneInterventionController(req, res) {
  const { status, message } = await intervention.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneInterventionController;
