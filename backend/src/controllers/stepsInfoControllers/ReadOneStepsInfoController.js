const { steps_info } = require("../../models");

async function readOneStepsInfoController(req, res) {
  const { status, message } = await steps_info.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneStepsInfoController;
