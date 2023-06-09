const { read_steps_info } = require("../../models");

async function updateReadStepsInfoController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await read_steps_info.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateReadStepsInfoController;
