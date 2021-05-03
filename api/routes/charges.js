const express = require("express");
const router = express.Router({ mergeParams: true });
const db = require("../models/index");
const controller = require("../controllers/charges.controller");
const charges = db.charge;

//GET ALL
router.get("/", controller.getCharge);

//CREATE
router.post("/", controller.createCharge);

//UPDATE
router.put("/", controller.updateCharge);

//DELETE
router.delete("/", controller.deleteCharge);

module.exports = router;
