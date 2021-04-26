const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const db = require("../models/index");
const departement = db.departement;

//GET ALL
router.get("/", (req, res) => {
  res.send("ALL deps");
  models.departement.findAll().then((deps) => res.status(200).json({ deps }));
});

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`Dep ${name}`);
});

//CREATE
router.post("/", (req, res) => {});

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
