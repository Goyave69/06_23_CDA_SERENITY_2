const { patient_form } = require("../../models");

async function readOneUserController(req, res) {
  const { status, message } = await patient_form.insert(req.body);

  return res.status(status).json(message);
}

module.exports = readOneUserController;
