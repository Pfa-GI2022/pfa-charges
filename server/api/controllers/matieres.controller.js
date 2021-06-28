const activitepedagogique = require("../models/activitepedagogique.js");
const models = require("../models/index.js");
const matiere = models.matiere;
const mod = models.module;

const createMatiere = async (req, res, next) => {
  try {
    console.log("Creating Matiere");
    const mat = await matiere.create(req.body);
    console.log("Matiere Created Successfully");
    return res.status(200).send(mat);
  } catch (error) {
    console.log("Creating Matiere Failed");
    return res.status(500).send(error.message);
  }
};

const getAllMatieres = async (req, res, next) => {
  try {
    console.log("Fetching All Matieres");
    const matieres = await matiere.findAll({
      include: [
        {
          model: models.module,
        },
        {
          model: models.activitePedagogique,
        },
      ],
    });
    console.log("Matieres Fetched Successfully");
    return res.status(200).send(matieres);
  } catch (error) {
    console.log("Fetching Matieres Failed");
    return res.status(500).send(error.message);
  }
};

const getOneMatiereByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Matiere");
  await matiere
    .findByPk(id, {
      include: [
        {
          model: models.module,
        },
        {
          model: models.activitePedagogique,
        },
      ],
    })
    .then((mats) => {
      console.log("Matiere Fetched Successfully");
      res.send(mats);
    })
    .catch((err) => {
      console.log("Fetching Matiere Failed");
      res.status(500).send({ error: err });
    });
};

const updateMatiere = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating Matiere");

  matiere
    .update(updatedData, { where: { id } })
    .then((updatedMat) => {
      console.log("Matiere Updated Successfully");
      res.status(200).send(updatedMat);
    })
    .catch((err) => {
      console.log("Updating Matiere Failed");
      res.status(500).send({ error: err });
    });
};

const deleteMatiereByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  console.log("Deleting Matiere");
  matiere
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Matiere Deleted Successfully");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Matiere Failed");
      res.status(500).send(err);
    });
};

module.exports = {
  createMatiere,
  getAllMatieres,
  getOneMatiereByID,
  updateMatiere,
  deleteMatiereByID,
};
