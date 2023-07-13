const { read_arrival_preparation } = require("../../models");

async function readReadArrivalPreparationController(req, res) {
  const { status, message } = await read_arrival_preparation.findAll();

  return res.status(status).json(message);
}

module.exports = readReadArrivalPreparationController;
