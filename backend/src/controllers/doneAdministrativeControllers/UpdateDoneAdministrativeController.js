const { done_administrative } = require("../../models");

async function UpdateDoneAdministrativeController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await done_administrative.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = UpdateDoneAdministrativeController;
