const express = require("express");

const router = express.Router();

const ReadByInterventionIdDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/ReadByInterventionIdDoneAdministrativeController");

const readDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/ReadDoneAdministrativeController");
const readOneDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/ReadOneDoneAdministrativeController");
const updateDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/UpdateDoneAdministrativeController");
const createDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/CreateDoneAdministrativeController");
const deleteDoneAdministrativeController = require("../controllers/doneAdministrativeControllers/DeleteDoneAdministrativeController");

router.get(
  "/byInterventionId/:interventionId",
  ReadByInterventionIdDoneAdministrativeController
);

router.get("/", readDoneAdministrativeController);
router.get("/:id", readOneDoneAdministrativeController);
router.put("/:id", updateDoneAdministrativeController);
router.post("/", createDoneAdministrativeController);
router.delete("/:id", deleteDoneAdministrativeController);

module.exports = router;
