const { user } = require("../../models");

async function createUserController(req, res) {
  // TODO validations (length, format...)
  const { status, message } = await user.insertSpecialist(req.body);

  return res.status(status).json(message);
}

module.exports = createUserController;
