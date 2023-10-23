const express = require("express");

const router = express.Router();

const readUserController = require("../controllers/userControllers/ReadUserController");
const readOneUserController = require("../controllers/userControllers/ReadOneUserController");
const updateUserController = require("../controllers/userControllers/UpdateUserController");
const createUserController = require("../controllers/userControllers/CreateUserController");
const createUserSpecialistController = require("../controllers/userControllers/CreateUserSpecialist");
const deleteUserController = require("../controllers/userControllers/DeleteUserController");

router.get("/", readUserController);
router.get("/:id", readOneUserController);
router.put("/:id", updateUserController);
router.post("/", createUserController);
router.post("/specialist", createUserSpecialistController);
router.delete("/:id", deleteUserController);

module.exports = router;
