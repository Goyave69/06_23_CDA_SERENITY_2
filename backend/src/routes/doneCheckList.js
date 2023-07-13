const express = require("express");

const router = express.Router();

const CreateDoneCheckListController = require("../controllers/doneCheckListController/CreateDoneCheckListController");
const ReadDoneCheckListController = require("../controllers/doneCheckListController/ReadDoneCheckListController");
const UpdateDoneCheckListController = require("../controllers/doneCheckListController/UpdateDoneCheckListController");
const ReadOneDoneCheckListController = require("../controllers/doneCheckListController/ReadOneDoneCheckListController");
const DeleteDoneCheckListController = require("../controllers/doneCheckListController/DeleteDoneCheckListController");

router.get("/", ReadDoneCheckListController);
router.get("/:id", ReadOneDoneCheckListController);
router.post("/", CreateDoneCheckListController);
router.put("/:id", UpdateDoneCheckListController);
router.delete("/:id", DeleteDoneCheckListController);

module.exports = router;
