const { read_steps_info } = require("../../models");

async function readReadStepsInfoController(req, res) {
  const { status, message } = await read_steps_info.findAll();

  return res.status(status).json(message);
}

module.exports = readReadStepsInfoController;
