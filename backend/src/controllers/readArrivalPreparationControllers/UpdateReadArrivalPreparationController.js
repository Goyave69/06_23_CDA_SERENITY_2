const { read_arrival_preparation } = require("../../models");

async function updateReadArrivalPreparationController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await read_arrival_preparation.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateReadArrivalPreparationController;
