const { read_arrival_preparation } = require("../../models");

async function readByInterventionIdReadArrivalPreparationController(req, res) {
  const { status, message } =
    await read_arrival_preparation.getByInterventionId(
      parseInt(req.params.interventionId, 10)
    );

  return res.status(status).json(message);
}

module.exports = readByInterventionIdReadArrivalPreparationController;
