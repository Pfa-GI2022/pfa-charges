const models = require("../models/index.js");
const departement = models.departement;
const filiere = models.filiere;
const matiere = models.matiere;
const modulee = models.module;

const createModule = async (req, res, next) => {
  try {
    console.log("Creating Module");
    const mod = await modulee.create(req.body);
    console.log("Module Created Successfully");
    return res.status(200).send(mod);
  } catch (error) {
    console.log("Creating Module Failed");
    return res.status(500).send(error.message);
  }
};

const getAllModules = async (req, res, next) => {
  console.log("Fetching All Modules");
  await modulee
    .findAll({
      include: [
        {
          model: matiere,
          include:{
            model: models.activitePedagogique,
          }
        },
        {
          model: filiere,
        },
        {
          model: departement,
        },
      ],
    })
    .then((mods) => {
      console.log("Modules Fetched Successfully");
      res.status(200).send(mods);
    })
    .catch((err) => {
      console.log("Fetching Modules Failed");
      res.status(500).send(err);
    });
};

const getModuleByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Module");
  await modulee
    .findByPk(id, {
      include: [
        {
          model: matiere,
           include:{
            model: models.activitePedagogique,
          }
        },
        {
          model: filiere,
        },
        {
          model: departement,
        },
      ],
    })
    .then((mod) => {
      console.log("Module Fetched Successfully");
      res.send(mod);
    })
    .catch((err) => {
      console.log("Fetching Module Failed");
      res.status(500).send({ error: err });
    });
};

const updateModule = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating Module");

  modulee
    .update(updatedData, { where: { id } })
    .then((updatedModule) => {
      console.log("Module Updated Successfully");
      res.status(200).send(updatedModule);
    })
    .catch((err) => {
      console.log("Updating Module Failed");
      res.status(500).send({ error: err });
    });
};

const deleteModuleByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
  console.log("Deleting Module");
  modulee
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Module Deleted Successfully");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Module Failed");
      res.status(500).send(err);
    });
};

module.exports = {
  createModule,
  getAllModules,
  getModuleByID,
  updateModule,
  deleteModuleByID,
};
