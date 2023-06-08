const express = require("express");

const router = express.Router();

const readSpecialityController = require("../controllers/specialityControllers/ReadSpecialityController");
const readOneSpecialityController = require("../controllers/specialityControllers/ReadOneSpecialityController");
const updateSpecialityController = require("../controllers/specialityControllers/UpdateSpecialityController");
const createSpecialityController = require("../controllers/specialityControllers/CreateSpecialityController");
const deleteSpecialityController = require("../controllers/specialityControllers/DeleteSpecialityController");

router.get("/", readSpecialityController);
router.get("/:id", readOneSpecialityController);
router.put("/:id", updateSpecialityController);
router.post("/", createSpecialityController);
router.delete("/:id", deleteSpecialityController);

module.exports = router;
