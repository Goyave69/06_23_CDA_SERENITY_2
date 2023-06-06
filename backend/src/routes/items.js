const express = require("express");

const router = express.Router();

const readItemController = require("../controllers/itemControllers/ReadItemController");
const readOneItemController = require("../controllers/itemControllers/ReadOneItemController");
const updateItemController = require("../controllers/itemControllers/UpdateItemController");
const createItemController = require("../controllers/itemControllers/CreateItemController");
const deleteItemController = require("../controllers/itemControllers/DeleteItemController");

router.get("/", readItemController);
router.get("/:id", readOneItemController);
router.put("/:id", updateItemController);
router.post("/", createItemController);
router.delete("/:id", deleteItemController);

module.exports = router;
