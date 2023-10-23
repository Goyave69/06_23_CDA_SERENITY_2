const { done_check_list } = require("../../models");

async function readOneDoneCheckListController(req, res) {
  const { status, message } = await done_check_list.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneDoneCheckListController;
