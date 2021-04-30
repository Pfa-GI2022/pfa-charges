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
router.get("/:id", (req, res) => {
  var name = req.params.id;
  res.send(`filiere ${id}`);
});

//CREATE
router.post("/", controller.createFiliere);


//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
