const { read_steps_info } = require("../../models");

async function readOneReadStepsInfoController(req, res) {
  const { status, message } = await read_steps_info.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneReadStepsInfoController;
