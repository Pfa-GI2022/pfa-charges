const models = require("../models/index.js");
const professeur = models.professeur;
const filiere = models.filiere;
const mod = models.module;

const createFiliere = async (req, res, next) => {
  try {
    console.log("inside createFiliere");
    const fil = await filiere.create(req.body);
    console.log("Module created");
    return res.status(200).json({ fil });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllFilieres = async (req, res, next) => {
  try {
    console.log("inside getAllFilieres");
    const filieres = await filiere.findAll({
      include: [
        {
          model: mod,
        },
        {
          model: professeur,
        }
        
      ],
    });
    console.log("inside getAllMatieres ");
    return res.status(200).json({ filieres });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createFiliere,
  getAllFilieres,
};
