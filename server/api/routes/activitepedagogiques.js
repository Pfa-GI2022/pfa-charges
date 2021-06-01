const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const controller = require("../controllers/activitepedagogiques.controller");
const modules = db.module;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GET ALL
router.get("/", controller.getAllActivities);

//GET ONE
router.get("/:id", controller.getActivityByID);

//CREATE
router.post("/", controller.createActivity);

//UPDATE
router.put("/:id", controller.updateActivity);

//DELETE
router.delete("/:id", controller.deleteActivityByID);

module.exports = router;
