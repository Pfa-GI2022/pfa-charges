const express = require("express");
const router = express.Router();
const db = require("../models/index");
const chargeRouter = require("./charges");
const prof = db.professeur;

//GET ALL
router.get("/", (req, res) => {
  res.send("ALL profs");
});

//GET ONE
router.get("/:name", (req, res) => {
  var name = req.params.name;
  res.send(`Prof ${name}`);
});

router.use("/:name/charge", chargeRouter);
//CREATE
router.post("/", (req, res) => {});

//UPDATE
router.put("/:name", (req, res) => {});

//DELETE
router.delete("/:name", (req, res) => {});
module.exports = router;
