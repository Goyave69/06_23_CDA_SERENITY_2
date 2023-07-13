const { done_check_list } = require("../../models");

async function deleteDoneCheckListController(req, res) {
  const { status, message } = await done_check_list.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteDoneCheckListController;
