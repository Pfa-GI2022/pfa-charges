const models = require("../models/index.js");
const professeur = models.professeur;
const departement = models.departement;

const createDepartement = async (req, res) => {
  const { nom, professeur, charge } = req.body;
  console.log("insidde create departement");
  departement
    .create(
      {
        nom: nom,
        professeur: professeur,
      },
      {
        include: [{ association: departement.prof }],
      }
    )
    .then((data) => {
      res.send(data);
      console.log("inside the then of create depart");
    })
    .catch((err) => {
      res.status(err);
      console.log(err.message);
    });
};

const getAllDepartements = async (req, res) => {
  console.log("getAllDeps");
  await departement
    .findAll({
      include: {
        model: professeur,
        as: "Professeurs",
      },
    })
    .then((deps) => res.status(200).send(deps));
};

const getOneDepartementByID = async (req, res) => {
  const id = req.params.id;
  await departement
    .findByPk(id, {
      include: [
        {
          model: professeur,
          as: "Professeurs",
        },
      ],
    })
    .then((dep) => res.send(dep))
    .catch((err) => res.status(500).send({ error: err }));
};

const getOneDepartementByName = async (req, res) => {
  const name = req.params.name;

  departement
    .findOne({
      where: {
        nom: "mecanique et math",
      },
    })
    .then((dep) => res.send(dep))
    .catch((err) => res.status(500).send({ error: err }));
};

const updateDepartement = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id);
  console.log(`updatedData ${updatedData}`);

  departement
    .update(updatedData, { where: { id } })
    .then((updatedDep) => res.status(200).send(updatedDep))
    .catch((err) => res.status(500).send({ error: err }));
};

const deleteDepartementByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  departement
    .destroy({
      where: { id },
    })
    .then(() => {
      res.status(204).end();
    });
};

module.exports = {
  createDepartement,
  getAllDepartements,
  getOneDepartementByID,
  deleteDepartementByID,
  updateDepartement,
};
