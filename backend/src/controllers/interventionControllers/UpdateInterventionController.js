const { intervention } = require("../../models");

async function updateInterventionController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await intervention.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateInterventionController;
