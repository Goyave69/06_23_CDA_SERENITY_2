const express = require("express");

const router = express.Router();

const CreateCheckListController = require("../controllers/checkListController/CreateCheckListController");
const ReadCheckListController = require("../controllers/checkListController/ReadCheckListController");
const UpdateCheckListController = require("../controllers/checkListController/UpdateCheckListController");
const ReadOneCheckListController = require("../controllers/checkListController/ReadOneCheckListController");
const DeleteCheckListController = require("../controllers/checkListController/DeleteCheckListController");

router.get("/", ReadCheckListController);
router.get("/:id", ReadOneCheckListController);
router.post("/", CreateCheckListController);
router.put("/:id", UpdateCheckListController);
router.delete("/:id", DeleteCheckListController);

module.exports = router;
