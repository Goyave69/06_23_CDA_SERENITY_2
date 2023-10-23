const { clinic } = require("../../models");

async function deleteClinicController(req, res) {
  const { status, message } = await clinic.delete(parseInt(req.params.id, 10));

  return res.status(status).json(message);
}

module.exports = deleteClinicController;
