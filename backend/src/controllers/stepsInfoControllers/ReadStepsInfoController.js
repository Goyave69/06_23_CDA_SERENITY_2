const { steps_info } = require("../../models");

async function readStepsInfoController(req, res) {
  const { status, message } = await steps_info.findAll();

  return res.status(status).json(message);
}

module.exports = readStepsInfoController;
