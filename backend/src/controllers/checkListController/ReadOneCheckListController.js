const { check_list } = require("../../models");

async function readOneCheckListController(req, res) {
  const { status, message } = await check_list.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneCheckListController;
