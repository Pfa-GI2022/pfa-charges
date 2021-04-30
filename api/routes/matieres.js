const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const controller = require("../controllers/matieres.controller");
const matieres = db.matiere;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GET ALL
router.get("/", controller.getAllMatieres);

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`matiere ${name}`);
});

//CREATE
router.post("/", controller.createMatiere);

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
