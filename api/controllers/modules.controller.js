const models = require("../models/index.js");
const departement = models.departement;
const filiere = models.filiere;
const matiere = models.matiere;
const modulee = models.module;


const createModule = async (req, res, next) => {
  try {
    console.log("inside createModules");
    const mod = await module.create(req.body);
    console.log("Module created");
    return res.status(200).json({ mod });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllModules = async (req, res, next) => {
  try {
    console.log("inside getAllModules");
    const modules = await modulee.findAll({
      include: [
        {
          model: filiere,
        },
        {
          model: departement,
        },
        {
          model: matiere,
        },
      ],
    });
    console.log("inside getAllModules ");
    return res.status(200).json({ modules });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createModule,
  getAllModules,
};
