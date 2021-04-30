const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const controller = require("../controllers/modules.controller");
const modules = db.module;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GET ALL
router.get("/", controller.getAllModules);

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`module ${name}`);
});

//CREATE
router.post("/", controller.createModule);

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
