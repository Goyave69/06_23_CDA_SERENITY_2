const { read_arrival_preparation } = require("../../models");

async function createReadArrivalPreparationController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await read_arrival_preparation.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createReadArrivalPreparationController;
