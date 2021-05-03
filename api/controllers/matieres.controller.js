const models = require("../models/index.js");
const matiere = models.matiere;
const mod = models.module;

const createMatiere = async (req, res, next) => {
  try {
    console.log("inside createMatiere");
    const mat = await module.create(req.body);
    console.log("Matiere created");
    return res.status(200).json({ mat });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllMatieres = async (req, res, next) => {
  try {
    console.log("inside getAllMatieres");
    const matieres = await matiere.findAll({
      include: [
       
        {
          model: mod,
        },
       
      ],
    });
    console.log("inside getAllMatieres ");
    return res.status(200).json({ matieres });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createMatiere,
  getAllMatieres,
};
