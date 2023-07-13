const { check_list } = require("../../models");

async function deleteCheckListController(req, res) {
  const { status, message } = await check_list.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteCheckListController;
