const activitepedagogique = require("../models/activitepedagogique.js");
const models = require("../models/index.js");
const groupe = models.groupe;
const activite = models.activitePedagogique;

const getAllGroupes = async (req, res) => {
  console.log("getAllDeps");
  await groupe
    .findAll({
      include: [
        {
          model: activite,
        },
      ],
    })
    .then((groupes) => res.status(200).send(groupes))
    .catch((err) => {
      console.log("catch getAllDeps");
      res.status(500).send({ error: err });
    });
};

const getGroupeByID = async (req, res) => {
  const id = req.params.id;
  await groupe
    .findByPk(id, {
      include: [
        {
          model: activite,
        },
      ],
    })
    .then((dep) => res.send(dep))
    .catch((err) => res.status(500).send({ error: err }));
};

const createGroupe = async (req, res) => {
  const { nom } = req.body;
  newGroupe = {
    nom: nom,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  groupe
    .create(newGroupe)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ error: err }));
};

const deleteGroupe = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  groupe
    .destroy({
      where: { id },
    })
    .then(() => {
      res.status(204).end();
    });
};

const updateGroupe = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  groupe
    .update(updatedData, { where: { id } })
    .then((updatedGroup) => res.status(200).send(updatedGroup))
    .catch((err) => res.status(500).send({ error: err }));
};
module.exports = {
  getAllGroupes,
  getGroupeByID,
  createGroupe,
  deleteGroupe,
  updateGroupe,
};
