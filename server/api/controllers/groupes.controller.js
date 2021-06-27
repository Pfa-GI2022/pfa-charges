const activitepedagogique = require("../models/activitepedagogique.js");
const models = require("../models/index.js");
const groupe = models.groupe;
const activite = models.activitePedagogique;

const getAllGroupes = async (req, res) => {
  console.log("Fetching All Groups");
  await groupe
    .findAll({
      include: [
        {
          model: activite,
        },
      ],
    })
    .then((groupes) => {
      console.log("Groups Fetched Successfully");
      res.status(200).send(groupes);
    })
    .catch((err) => {
      console.log("Fetching Groups Failed");
      res.status(500).send({ error: err });
    });
};

const getGroupeByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Group");
  await groupe
    .findByPk(id, {
      include: [
        {
          model: activite,
        },
      ],
    })
    .then((dep) => {
      console.log("Group Fetched");
      res.send(dep);
    })
    .catch((err) => {
      console.log("Fetching Group Failed");
      res.status(500).send({ error: err });
    });
};

const createGroupe = async (req, res) => {
  const { nom } = req.body;
  console.log("Creating Group");
  newGroupe = {
    nom: nom,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  groupe
    .create(newGroupe)
    .then((data) => {
      console.log("Group Created Successfully");
      res.send(data);
    })
    .catch((err) => {
      console.log("Creating Group Failed");
      res.status(500).send({ error: err });
    });
};

const deleteGroupe = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  console.log("Deleting Group");
  groupe
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Group Deleted");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Group Failed");
      res.status(500).send(err);
    });
};

const updateGroupe = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating Group");
  groupe
    .update(updatedData, { where: { id } })
    .then((updatedGroup) => {
      console.log("Group Updated");
      res.status(200).send(updatedGroup);
    })
    .catch((err) => {
      console.log("Updating Group Failed");
      res.status(500).send({ error: err });
    });
};
module.exports = {
  getAllGroupes,
  getGroupeByID,
  createGroupe,
  deleteGroupe,
  updateGroupe,
};
