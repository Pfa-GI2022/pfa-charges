const models = require("../models/index.js");
const professeur = models.professeur;
const departement = models.departement;
const filiere = models.filiere;
const charge = models.charge;
const activite = models.activitePedagogique;


const createProf = async (req, res, next) => {
  // try {
  //   const prof = await professeur.create(req.body);
  //   return res.status(200).json({ prof });
  // } catch (error) {
  //   return res.status(500).send(error.message);
  // }
  const {nom ,prenom,avatar,charge} = req.body;

  professeur.create({
    nom : nom,
    prenom : prenom,
    avatar : avatar,
    createdAt : new Date(),
    updatedAt : new Date(),
    charge : charge
  } , {
    include : [
      {
        association: professeur.charge
      }
    ]
  }).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(404).send({error : err.message});

    });
};

const getAllProfs = async (req, res, next) => {
  try {
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
        }
      ],
    });

    return res.status(200).send(profs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProfById = async (req, res, next) => {
  try {
    const prof = await professeur.findByPk( req.params.id,{
      include: [
        {
          model: filiere,
        },
        {
          model: departement,
        },
        {
          model: charge,
        }
        ]
    });
    return res.status(200).json({ prof });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateProf = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [updated] = await professeur.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedProf = await professeur.findOne({ where: { id: id } });
      return res.status(200).json({ prof: updatedProf });
    }
    throw new Error("Prof not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteProf = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await professeur.destroy({
      where: { id: id },
    });
    if (deleted) {
      console.log("Prof deleted");
      return res.status(204).send("Prof deleted");
    }
    throw new Error("Prof not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getProfByDepartementId = async (req ,res) => {
  const { id } = req.params;

  try {
    const profs = await professeur.findAll({
      include: [
        {
          model: filiere,
        },
        {
          attributes : [],
          model: departement,
          where : {id}
        },
        {
          model: charge,
        }
      ],
    });

    return res.status(200).send(profs);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  createProf,
  getAllProfs,
  getProfById,
  updateProf,
  deleteProf,
  getProfByDepartementId
};
