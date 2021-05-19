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
router.get("/:id", (req, res) => controller.getOneMatiereByID(req ,res));

//CREATE
router.post("/", controller.createMatiere);

//UPDATE
router.put("/:id", (req, res) => controller.updateMatiere(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteMatiereByID(req,res));

module.exports = router;
