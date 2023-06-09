const { steps_info } = require("../../models");

async function createStepsInfoController(req, res) {
  const { status, message } = await steps_info.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createStepsInfoController;
