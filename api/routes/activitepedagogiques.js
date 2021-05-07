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
router.get("/:id", (req, res) => controller.getActivityByID(req ,res));

//CREATE
router.post("/", controller.createActivity);

//UPDATE
router.put("/:id", (req, res) => controller.updateActivity(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteActivityByID(req,res));


module.exports = router;
