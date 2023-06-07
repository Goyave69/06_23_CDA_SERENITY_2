const { intervention } = require("../../models");

async function readInterventionController(req, res) {
  const { status, message } = await intervention.findAll();

  return res.status(status).json(message);
}

module.exports = readInterventionController;
