const { intervention } = require("../../models");

async function createInterventionController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await intervention.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createInterventionController;
