const models = require("../models/index.js");
const professeur = models.professeur;
const filiere = models.filiere;
const mod = models.module;

//Creation d'une filiere
const createFiliere = async (req, res, next) => {
  try {
    console.log("inside createFiliere");
    const fil = await filiere.create(req.body);
    console.log("Module created");
    return res.status(200).json({ fil });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

//Affichage de toutes les filieres
const getAllFilieres = async (req, res, next) => {
  try {
    console.log("inside getAllFilieres");
    const filieres = await filiere.findAll({
      include: [
        {
          model: mod,
        },
        {
          model: professeur,
        }
        
      ],
    });
    console.log("inside getAllFilieres ");
    return res.status(200).json({ filieres });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getFiliereByID = async (req, res) => {
  const id = req.params.id;
  await filiere.findByPk(id , {
  include : [
    {
    model : professeur
  },
  {
    model : mod
  },
]
}).then(filiere => res.send(filiere))
  .catch(err => {
    console.log('insied the catch of getFiliereByID');
    res.status(500).send({error : err})
  });
};

const updateFiliere = async (req ,res) => {
const id = req.params.id;
const updatedData = req.body;
console.log(id);
console.log(`updatedData ${updatedData}`);

filiere.update(updatedData , {where : {id}})
  .then(updatedFiliere => res.status(200).send(updatedFiliere))
  .catch(err => res.status(500).send({error : err}))
}

const deleteFiliereByID = async (req ,res) => {
const id = parseInt(req.params.id, 10);
if (Number.isNaN(id)) return res.status(400).end();

filiere.destroy({
 where: {id}
}).then(() => {
 res.status(204).end();
});}



module.exports = {
  createFiliere,
  getAllFilieres,
  getFiliereByID,
  updateFiliere,
  deleteFiliereByID
};
