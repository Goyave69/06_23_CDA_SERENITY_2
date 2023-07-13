const { user } = require("../../models");
const { formatDate } = require("../../services/DateHelper");

async function readOneUserController(req, res) {
  const { status, message } = await user.find(parseInt(req.params.id, 10));

  message.birthdate = formatDate(message.birthdate);

  return res.status(status).json(message);
}

module.exports = readOneUserController;
