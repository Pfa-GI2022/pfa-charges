const express = require("express");
const router = express.Router();
const db = require("../models/index");
const controller = require("../controllers/groupes.controller");
//

//GET ALL
router.get("/", (req, res) => controller.getAllGroupes(req ,res));

//GET ONE
router.get("/:id", (req, res) => controller.getGroupeByID(req ,res));

//CREATE
router.post("/", (req, res) => controller.createGroupe(req, res));

//UPDATE
router.put("/:id", (req, res) => controller.updateGroupe(req ,res));

//DELETE
router.delete("/:id", (req, res) => controller.deleteGroupe(req, res));

module.exports = router;
