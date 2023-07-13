const { read_arrival_preparation } = require("../../models");

async function deleteReadArrivalPreparationController(req, res) {
  const { status, message } = await read_arrival_preparation.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteReadArrivalPreparationController;
