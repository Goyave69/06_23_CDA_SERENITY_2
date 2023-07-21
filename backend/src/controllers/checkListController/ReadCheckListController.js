const { check_list } = require("../../models");

async function readCheckListController(req, res) {
  const { status, message } = await check_list.findAll();

  return res.status(status).json(message);
}

module.exports = readCheckListController;
