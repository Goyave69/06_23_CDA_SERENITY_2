const { read_steps_info } = require("../../models");

async function deleteReadStepsInfoController(req, res) {
  const { status, message } = await read_steps_info.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteReadStepsInfoController;
