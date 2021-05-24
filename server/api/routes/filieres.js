const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const controller = require("../controllers/filieres.controller");
const filieres = db.filiere;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


//GET ALL
router.get("/", controller.getAllFilieres);

//GET ONE
router.get("/:id", (req, res) => controller.getFiliereByID(req, res));

//CREATE
router.post("/", controller.createFiliere);

//UPDATE
router.put("/:id", (req, res) => controller.updateFiliere(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteFiliereByID(req,res));
module.exports = router;
