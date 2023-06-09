const { read_steps_info } = require("../../models");

async function createReadStepsInfoController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await read_steps_info.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createReadStepsInfoController;
