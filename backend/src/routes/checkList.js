const express = require("express");

const router = express.Router();

const CreateChecklistContoller = require("../controllers/checkListController/CreateChecklistContoller");
const ReadChecklistContoller = require("../controllers/checkListController/ReadChecklistController");
const UpdateCheckListController = require("../controllers/checkListController/UpdateCheckListController");
const ReadOneChecklistContoller = require("../controllers/checkListController/ReadOneCheckListController");

router.get("/", ReadChecklistContoller);
router.get("/:id", ReadOneChecklistContoller);
router.post("/", CreateChecklistContoller);
router.put("/:id", UpdateCheckListController);

module.exports = router;
