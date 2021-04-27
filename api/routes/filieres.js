const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const filieres = db.filiere;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//GET ALL
router.get("/", (req, res) => {
  res.send("ALL filieres");
});

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`filiere ${name}`);
});

//CREATE
router.post("/", (req, res) => {
  let info = req.body.info;
  let someInfo = req.body.someInfo;
  let someOtherInfo = req.body.someOtherInfo;

  res.send(`Field 1: ${info}, Field 2: ${someInfo}, Field 3: ${someOtherInfo}`);
});

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
