const { speciality } = require("../../models");

async function createSpecialityController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await speciality.insert(req.body);

  return res.status(status).json(message);
}

module.exports = createSpecialityController;
