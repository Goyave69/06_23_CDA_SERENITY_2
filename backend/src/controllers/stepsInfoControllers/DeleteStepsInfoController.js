const { steps_info } = require("../../models");

async function deleteStepsInfoController(req, res) {
  const { status, message } = await steps_info.delete(
    parseInt(req.params.id, 10)
  );
  return res.status(status).json(message);
}

module.exports = deleteStepsInfoController;
