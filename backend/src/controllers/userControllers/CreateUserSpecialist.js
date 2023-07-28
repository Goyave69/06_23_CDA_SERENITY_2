const models = require("../../models");

async function createUserController(req, res) {
  // TODO validations (length, format...)
  const userData = req.body;
  userData.roles = 2;
  const { status: uStatus, message: uMessage } = await models.user.insert(
    userData
  );
  if (uStatus !== 201) {
    return res.status(uStatus).json(uMessage);
  }

  const specialistData = { user_id: uMessage.id };
  const { status: sStatus, message: sMessage } = await models.specialist.insert(
    specialistData
  );
  if (sStatus !== 201) {
    return res.status(sStatus).json(sMessage);
  }

  const shcData = { specialist_id: sMessage.id, clinic_id: req.body.clinic_id };
  const { status: shcStatus, message: shcMessage } =
    await models.clinic.newSpecialist(shcData);
  if (shcStatus !== 201) {
    return res.status(shcStatus).json(shcMessage);
  }

  const shsData = {
    specialist_id: sMessage.id,
    speciality_id: req.body.speciality_id,
  };
  const { status: shsStatus, message: shsMessage } =
    await models.speciality.newSpecialist(shsData);
  if (shsStatus !== 201) {
    return res.status(shsStatus).json(shsMessage);
  }

  return res.status(201).json("Praticien créée");
}

module.exports = createUserController;
