const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const controller = require("../controllers/profs.controller");
const db = require("../models/index");
const chargeRouter = require("./charges");
const prof = db.professeur;
const authJwt = require("../middlewares/authJwt");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//GET ALL
router.get("/", controller.getAllProfs);

//GET ONE BY ID
router.get("/:id", controller.getProfById);

//GET BY DEP ID
router.get("/departement/:id", controller.getProfByDepartementId);

router.use("/:id/charge", chargeRouter);
//CREATE
router.post("/", controller.createProf);

//UPDATE
router.put("/:id", controller.updateProf);

//DELETE
router.delete("/:id", controller.deleteProf);

module.exports = router;
