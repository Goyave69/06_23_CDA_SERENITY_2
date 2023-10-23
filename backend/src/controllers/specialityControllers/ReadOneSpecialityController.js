const { speciality } = require("../../models");

async function readOneSpecialityController(req, res) {
  const { status, message } = await speciality.find(
    parseInt(req.params.id, 10)
  );

  return res.status(status).json(message);
}

module.exports = readOneSpecialityController;
