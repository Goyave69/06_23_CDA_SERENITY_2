const { speciality } = require("../../models");

async function deleteSpecialityController(req, res) {
  const { status, message } = await speciality.delete(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = deleteSpecialityController;
