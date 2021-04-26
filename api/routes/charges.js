const express = require("express");
const chargeRouter = express.Router({ mergeParams: true });
const db = require("../models/index");
const charges = db.charge;

//GET ALL
chargeRouter.get("/", (req, res) => {
  let profName = req.params.name;
  res.send(`Charge ${profName}`);
});

// //CREATE
// router.post("/", (req, res) => {});

// //UPDATE
// router.put("/:name", (req, res) => {});

// //DELETE
// router.delete("/:name", (req, res) => {});
module.exports = chargeRouter;
