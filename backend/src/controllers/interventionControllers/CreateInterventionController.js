const models = require("../../models");

async function createInterventionController(req, res) {
  // TODO validations (length, format...)
  const { status: iStatus, message: iMessage } =
    await models.intervention.insert(req.body);
  if (iStatus !== 201) {
    return res.status(iStatus).json(iMessage);
  }
  const intervention_id = iMessage.id;
  const { surgery_id } = req.body;

  const daData = [
    { category: 1, intervention_id },
    { category: 2, intervention_id },
    { category: 3, intervention_id },
  ];
  const { status: daStatus, message: daMessage } =
    await models.done_administrative.insertMultiple(daData);
  if (daStatus !== 201) {
    return res.status(daStatus).json(daMessage);
  }

  const rapData = { steps: 0, intervention_id };
  const { status: rapStatus, message: rapMessage } =
    await models.read_arrival_preparation.insert(rapData);
  if (rapStatus !== 201) {
    return res.status(rapStatus).json(rapMessage);
  }

  const afiData = [
    { speciality_id: 1, intervention_id },
    { speciality_id: 2, intervention_id },
  ];
  const { status: afiStatus, message: afiMessage } =
    await models.appointment_for_intervention.insertMultiple(afiData);
  if (afiStatus !== 201) {
    return res.status(afiStatus).json(afiMessage);
  }

  const { status: clStatus, message: clMessage } =
    await models.check_list.findAll();
  if (clStatus !== 200) {
    return res.status(clStatus).json(clMessage);
  }
  const dclData = clMessage.map((cl) => ({
    check_list_id: cl.id,
    intervention_id,
  }));
  const { status: dclStatus, message: dclMessage } =
    await models.done_check_list.insertMultiple(dclData);
  if (dclStatus !== 201) {
    return res.status(dclStatus).json(dclMessage);
  }

  const { status: siStatus, message: siMessage } =
    await models.steps_info.getBySurgeryId(parseInt(surgery_id, 10));
  if (siStatus !== 200) {
    return res.status(siStatus).json(siMessage);
  }
  const rsiData = siMessage.map((si) => ({
    steps_info_id: si.id,
    intervention_id,
  }));
  const { status: rsiStatus, message: rsiMessage } =
    await models.read_steps_info.insertMultiple(rsiData);
  if (rsiStatus !== 201) {
    return res.status(rsiStatus).json(rsiMessage);
  }

  return res.status(201).json("Intervention créée");
}

module.exports = createInterventionController;
