const { read_arrival_preparation } = require("../../models");

async function readOneReadArrivalPreparationController(req, res) {
  const { status, message } = await read_arrival_preparation.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneReadArrivalPreparationController;
