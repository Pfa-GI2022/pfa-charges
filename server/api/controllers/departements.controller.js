const models = require("../models/index.js");
const professeur = models.professeur;
const departement = models.departement;
const charge = models.charge;

const createDepartement = async (req, res) => {
  const { nom, professeur, charge } = req.body;
  console.log("Creating Department");
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
      console.log("Department Created Successfully");
      res.send(data);
    })
    .catch((err) => {
      console.log("Creating Department Failed");
      res.status(err);
      console.log(err.message);
    });
};

const getAllDepartements = async (req, res) => {
  console.log("Fetching All Departments");
  await departement
    .findAll({
      include: [
        {
          model: professeur,
          as: "Professeurs",
        },
        {
          model: models.module,
        },
      ],
    })
    .then((deps) => {
      console.log("Departments Fetched Successfully");
      res.status(200).send(deps);
    })
    .catch((err) => {
      console.log("Fetching All Departments Failed");
      res.status(500).send(err);
    });
};

const getOneDepartementByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Department");
  await departement
    .findByPk(id, {
      include: [
        {
          model: professeur,
          as: "Professeurs",
          include: [
            {
              model: charge,
            },
          ],
        },
        {
          model: models.module,
        },
      ],
    })
    .then((dep) => {
      console.log("Department Fetched Succesfully");
      res.send(dep);
    })
    .catch((err) => {
      console.log("Fetching Department Failed");
      res.status(500).send({ error: err });
    });
};

const updateDepartement = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating Department");

  departement
    .update(updatedData, { where: { id } })
    .then((updatedDep) => {
      console.log("Department Updated Successfully");
      res.status(200).send(updatedDep);
    })
    .catch((err) => {
      console.log("Updating Department Failed");
      res.status(500).send({ error: err });
    });
};

const deleteDepartementByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  console.log("Deleting Department");
  departement
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Department Deleted Successfully");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Department Failed");
      res.status(500).send(err);
    });
};

module.exports = {
  createDepartement,
  getAllDepartements,
  getOneDepartementByID,
  deleteDepartementByID,
  updateDepartement,
};
