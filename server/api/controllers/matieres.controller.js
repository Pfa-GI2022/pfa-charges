const activitepedagogique = require("../models/activitepedagogique.js");
const models = require("../models/index.js");
const matiere = models.matiere;
const mod = models.module;

const createMatiere = async (req, res, next) => {
  try {
    console.log("inside createMatiere");
    const mat = await matiere.create(req.body);
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
          model: models.module,
        },
        {
          model: models.activitePedagogique,
        },
      ],
    });
    console.log("inside getAllMatieres ");
    return res.status(200).send( matieres );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getOneMatiereByID = async (req, res) => {
  const id = req.params.id;
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
    .then((mats) => res.send(mats))
    .catch((err) => res.status(500).send({ error: err }));
};

const getOneMatiereByName = async (req, res) => {
  const name = req.params.name;

  matiere
    .findOne({
      where: {
        nom: "Mecanique de point",
      },
    })
    .then((mats) => res.send(mats))
    .catch((err) => res.status(500).send({ error: err }));
};

const updateMatiere = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id);
  console.log(`updatedData ${updatedData}`);

  matiere
    .update(updatedData, { where: { id } })
    .then((updatedMat) => res.status(200).send(updatedMat))
    .catch((err) => res.status(500).send({ error: err }));
};

const deleteMatiereByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  matiere
    .destroy({
      where: { id },
    })
    .then(() => {
      res.status(204).end();
    });
};

module.exports = {
  createMatiere,
  getAllMatieres,
  getOneMatiereByID,
  getOneMatiereByName,
  updateMatiere,
  deleteMatiereByID,
};
