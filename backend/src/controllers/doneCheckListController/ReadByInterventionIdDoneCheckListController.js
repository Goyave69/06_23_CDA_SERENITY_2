const { done_check_list } = require("../../models");

async function readByInterventionIdDoneCheckListController(req, res) {
  const { status, message } = await done_check_list.getByInterventionId(
    parseInt(req.params.interventionId, 10)
  );

  return res.status(status).json(message);
}

module.exports = readByInterventionIdDoneCheckListController;
