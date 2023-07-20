const { steps_info } = require("../../models");

async function createStepsInfoController(req, res) {
  const pipin = JSON.parse(req.body.pipin);
  const { renamedFile } = req;
  pipin.image = renamedFile;
  const { status, message } = await steps_info.insert(pipin);

  return res.status(status).json(message);
}

module.exports = createStepsInfoController;
