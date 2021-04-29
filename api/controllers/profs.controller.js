const models = require("../models/index.js");
const professeur = models.professeur;
const departement = models.departement;
const filiere = models.filiere;
const charge = models.charge;

const createProf = async (req, res, next) => {
  try {
    console.log("inside createProf");
    const prof = await professeur.create(req.body);
    console.log("Prof created");
    return res.status(200).json({ prof });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllProfs = async (req, res, next) => {
  try {
    console.log("inside getAllProfs");
    const profs = await professeur.findAll({
      include: [
        {
          model: filiere,
        },
        {
          model: departement,
        },
        {
          model: charge,
        },
      ],
    });
    console.log("inside getAllProfs 2");
    return res.status(200).json({ profs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createProf,
  getAllProfs,
};
