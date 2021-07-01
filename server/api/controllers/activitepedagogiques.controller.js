const models = require("../models/index.js");
const matiere = models.matiere;
const professeur = models.professeur;
const groupe = models.groupe;
const activite = models.activitePedagogique;

const createActivity = async (req, res, next) => {
  try {
    console.log("Creating activity");
    const acp = await activite.create(req.body, { include: { model: groupe } });
    console.log("Activity created");
    return res.status(200).send(acp);
  } catch (error) {
    console.log("Activity creation failed");
    return res.status(500).send(error.message);
  }
};

const getAllActivities = async (req, res, next) => {
  try {
    console.log("Getting All Activities");
    const activities = await activite.findAll({
      include: [{ model: professeur }, { model: groupe }, { model: matiere }],
    });
    console.log("Activities fetched successfully");
    return res.status(200).send(activities);
  } catch (error) {
    console.log("Fetching Activities failed");
    return res.status(500).send(error.message);
  }
};

const getActivityByID = async (req, res) => {
  const id = req.params.id;
  console.log("Fetching Activity");
  await activite
    .findByPk(id, {
      include: [{ model: professeur }, { model: groupe }, { model: matiere }],
    })
    .then((actped) => {
      res.send(actped);
      console.log("Activity Fetched successfully");
    })
    .catch((err) => {
      console.log("Fetching Activity failed");
      res.status(500).send({ error: err });
    });
};

const updateActivity = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log("Updating activity");
  matiere
    .update(updatedData, { where: { id } })
    .then((updatedActivity) => {
      res.status(200).send(updatedActivity);
      console.log("Activity updated");
    })
    .catch((err) => {
      console.log("Updating Activity failed");
      res.status(500).send({ error: err });
    });
};

const deleteActivityByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log("Deleting Activity");
  if (Number.isNaN(id)) return res.status(400).end();

  activite
    .destroy({
      where: { id },
    })
    .then(() => {
      console.log("Activity Deleted successfully");
      res.status(204).end();
    })
    .catch((err) => {
      console.log("Deleting Activity Failed");
      return res.status(500).send({ error: err });
    });
};

module.exports = {
  createActivity,
  getAllActivities,
  getActivityByID,
  updateActivity,
  deleteActivityByID,
};
