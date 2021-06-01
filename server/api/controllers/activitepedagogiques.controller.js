const models = require("../models/index.js");
const matiere = models.matiere;
const professeur = models.professeur;
const groupe = models.groupe;
const activite = models.activitePedagogique;

const createActivity = async (req, res, next) => {
  try {
    console.log("inside createActivity");

    const acp = await activite.create(req.body);
    console.log("Activity created");
    return res.status(200).json({ acp });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllActivities = async (req, res, next) => {
  try {
    console.log("inside getAllActivities");
    const activities = await activite.findAll({
      include: [
        {
          model: matiere,
        },
        {
          model: groupe,
        },
      ],
    });
    console.log("inside getAllActivities ");
    return res.status(200).json({ activities });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getActivityByID = async (req, res) => {
  const id = req.params.id;
  await activite
    .findByPk(id, {
      include: [
        {
          model: mod,
        },
      ],
    })
    .then((actped) => res.send(actped))
    .catch((err) => res.status(500).send({ error: err }));
};

const updateActivity = async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id);
  console.log(`updatedData ${updatedData}`);
  matiere
    .update(updatedData, { where: { id } })
    .then((updatedActivity) => res.status(200).send(updatedActivity))
    .catch((err) => res.status(500).send({ error: err }));
};

const deleteActivityByID = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  activite
    .destroy({
      where: { id },
    })
    .then(() => {
      res.status(204).end();
    });
};

module.exports = {
  createActivity,
  getAllActivities,
  getActivityByID,
  updateActivity,
  deleteActivityByID,
};
