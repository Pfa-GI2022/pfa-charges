const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const departement = db.departement;
const professeur = db.professeur;
const controller = require("../controllers/departements.controller");


//GET ALL
router.get("/", (req, res) => controller.getAllDepartements(req ,res));

//GET ONE
router.get("/:id", (req, res) => controller.getOneDepartementByID(req ,res));

//CREATE
router.post("/", (req, res) => controller.createDepartement(req ,res));

//UPDATE
router.put("/:id", (req, res) => controller.updateDepartement(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteDepartementByID(req,res));

module.exports = router;
