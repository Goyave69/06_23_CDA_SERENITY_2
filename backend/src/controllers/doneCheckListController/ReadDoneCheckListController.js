const { done_check_list } = require("../../models");

async function readDoneCheckListController(req, res) {
  const { status, message } = await done_check_list.findAll();

  return res.status(status).json(message);
}

module.exports = readDoneCheckListController;
