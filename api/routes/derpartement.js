const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const db = require('../models/index');
const departemen = db.departement;

//getting all departemnts
router.get('/' , (req ,res) => {
    models.departement.findAll()
        .then(deps => res.status(200).json({deps}))
});

//getting a departement based on the name
router.get('/:name' , (req ,res) => {
   
});

//creating a departement
router.post('/', (req ,res) => {

});

//updating a departement
router.put('/:name' , (req,res) => {

});

//deleting a departement
router.delete('/:name' , (req,res) => {

});
module.exports = router;