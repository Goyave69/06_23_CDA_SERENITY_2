const { check_list } = require("../../models");

async function CreateChecklistContoller(req, res) {
  const { status, message } = await check_list.insert(req.body);

  return res.status(status).json(message);
}

module.exports = CreateChecklistContoller;
