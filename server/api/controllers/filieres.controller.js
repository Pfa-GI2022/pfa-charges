const models = require("../models/index.js");
const professeur = models.professeur;
const filiere = models.filiere;
const mod = models.module;

//Creation d'une filiere
const createFiliere = async (req, res, next) => {
  try {
    console.log("Creating Filiere");
    const fil = await filiere.create(req.body);
    console.log("Filiere Created");
    return res.status(200).send(fil);
  } catch (error) {
    console.log("Creating Filiere Failed");
    return res.status(500).send(error.message);
  }
};

//Affichage de toutes les filieres
const getAllFilieres = async (req, res, next) => {
  try {
    console.log("Fetching All Filieres");
    const filieres = await filiere.findAll({
      include: [
        {
          model: mod,
          include: {
            model: models.matiere,
            include : {
              model : models.activitePedagogique
            }
          },
        },
        {
          model: professeur,
        },
      ],
    });
    console.log("Filieres Fetched Successfully");
    return res.status(200).send(filieres);
  } catch (error) {
    console.log("Fetching Filieres Failed");
    return res.status(500).send(error.message);
  }
};

const getFiliereByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Filiere");
  await filiere
    .findByPk(id, {
      include: [
        {
          model: mod,
          include: {
            model: models.matiere,
            include : {
              model : models.activitePedagogique
            }
          },
        },
        {
          model: professeur,
        },
      ],
    })
    .then((filiere) => {
      console.log("Filiere Fetched Successfully");
      res.send(filiere);
    })
    .catch((err) => {
      console.log("Fetching Filiere Failed");
      res.status(500).send({ error: err });
    });
};

const updateFiliere = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating Filiere");
  filiere
    .update(updatedData, { where: { id } })
    .then((updatedFiliere) => {
      console.log("Filiere Updated");
      res.status(200).send(updatedFiliere);
    })
    .catch((err) => {
      console.log("Updating Filiere Failed");
      res.status(500).send({ error: err });
    });
};

const deleteFiliereByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  console.log("Deleting Filiere");
  filiere
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Filiere Deleted");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Filiere Failed");
      res.status(500).send(err);
    });
};

module.exports = {
  createFiliere,
  getAllFilieres,
  getFiliereByID,
  updateFiliere,
  deleteFiliereByID,
};
