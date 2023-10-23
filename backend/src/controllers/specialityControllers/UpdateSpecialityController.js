const { speciality } = require("../../models");

async function updateSpecialityController(req, res) {
  // TODO validations (length, format...)

  const { status, message } = await speciality.update(
    req.body,
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = updateSpecialityController;
