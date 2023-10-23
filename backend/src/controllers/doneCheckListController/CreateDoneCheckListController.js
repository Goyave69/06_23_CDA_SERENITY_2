const { done_check_list } = require("../../models");

async function CreateDoneCheckListController(req, res) {
  const { status, message } = await done_check_list.insert(req.body);

  return res.status(status).json(message);
}

module.exports = CreateDoneCheckListController;
