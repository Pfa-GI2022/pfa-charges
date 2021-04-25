const express = require('express');
const router = express.Router();
const db = require('../models/index');
const prof = db.professeur;

//getting all departemnts
router.get('/' , (req ,res) => {
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