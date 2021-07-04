const models = require("../models/index.js");
const professeur = models.professeur;
const departement = models.departement;
const filiere = models.filiere;
const charge = models.charge;
const activite = models.activitePedagogique;

const createProf = async (req, res, next) => {
  const { nom, prenom, email, avatar, charge, depID } = req.body;
  console.log("Creating Prof");
  professeur
    .create(
      {
        nom: nom,
        prenom: prenom,
        email: email,
        avatar: avatar,
        depID: depID,
        charge: charge,
      },
      {
        include: [
          {
            association: professeur.charge,
          },
        ],
      }
    )
    .then((data) => {
      res.send(data);
      console.log("Prof Created Successfully");
    })
    .catch((err) => {
      console.log("Creating Prof Failed");
      res.status(404).send({ error: err.message });
    });
};

const getAllProfs = async (req, res, next) => {
  try {
    console.log("Fetching All Profs");
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
        {
          model: activite,
          include: [{
            model: models.matiere,
            
          },{
            model: models.groupe,
          }]
        },
      ],
    });
    console.log("Profs Fetched Successfully");
    return res.status(200).send(profs);
  } catch (error) {
    console.log("Fetching Profs Failed");
    return res.status(500).send(error.message);
  }
};

const getProfById = async (req, res, next) => {
  try {
    console.log("Fetching Prof");
    const prof = await professeur.findByPk(req.params.id, {
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
        {
          model: activite,
          include: [{
            model: models.matiere,
            
          },{model: models.groupe,}]
        },
      ],
    });
    console.log("Prof Fetched Successfully");
    return res.status(200).send(prof);
  } catch (error) {
    console.log("Fetching Prof Failed");
    return res.status(500).send(error.message);
  }
};

const updateProf = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log("Updating Prof");
    const [updated] = await professeur.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedProf = await professeur.findOne({ where: { id: id } });
      console.log("Prof Updated Successfully");
      return res.status(200).json({ prof: updatedProf });
    }
    throw new Error("Prof not found");
  } catch (error) {
    console.log("Updating Prof Failed");
    return res.status(500).send(error.message);
  }
};

const deleteProf = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting Prof");
    const deleted = await professeur.destroy({
      where: { id: id },
    });
    if (deleted) {
      console.log("Prof Deleted Successfully");
      return res.status(204).end();
    }
    throw new Error("Prof not found");
  } catch (error) {
    console.log("Deleting Prof Failed");
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createProf,
  getAllProfs,
  getProfById,
  updateProf,
  deleteProf,
};
