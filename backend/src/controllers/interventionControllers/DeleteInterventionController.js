const { intervention } = require("../../models");

async function deleteInterventionController(req, res) {
  const { status, message } = await intervention.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteInterventionController;
