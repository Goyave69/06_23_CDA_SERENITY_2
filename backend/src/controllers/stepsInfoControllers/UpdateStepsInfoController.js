const { steps_info } = require("../../models");

async function updateStepsInfoController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await steps_info.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateStepsInfoController;
