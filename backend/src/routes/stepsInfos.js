const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.UPLOADS_FOLDER });

const createStepsInfoController = require("../controllers/stepsInfoControllers/CreateStepsInfoController");
const readOneStepsInfoController = require("../controllers/stepsInfoControllers/ReadOneStepsInfoController");
const updateStepsInfoController = require("../controllers/stepsInfoControllers/UpdateStepsInfoController");
const readStepsInfo = require("../controllers/stepsInfoControllers/ReadStepsInfoController");
const deleteStepsInfoController = require("../controllers/stepsInfoControllers/DeleteStepsInfoController");
const { fileRename } = require("../controllers/FileController/FileControllers");

router.get("/", readStepsInfo);
router.get("/:id", readOneStepsInfoController);
router.put("/:id", updateStepsInfoController);
router.post(
  "/",
  upload.single("picture"),
  fileRename,
  createStepsInfoController
);
router.delete("/:id", deleteStepsInfoController);

module.exports = router;
