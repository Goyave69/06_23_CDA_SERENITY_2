const { check_list } = require("../../models");

async function UpdateCheckListController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await check_list.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = UpdateCheckListController;
