const models = require("../models/index.js");
const departement = models.departement;
const filiere = models.filiere;
const matiere = models.matiere;
const modulee = models.module;


const createModule = async (req, res, next) => {
  try {
    console.log("inside createModules");
    const mod = await module.create(req.body);
    console.log("Module created");
    return res.status(200).json({ mod });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllModules = async (req, res, next) => {
  try {
    console.log("inside getAllModules");
    const modules = await modulee.findAll({
      include: [
        {
          model: filiere,
        },
        {
          model: departement,
        },
        {
          model: matiere,
        },
      ],
    });
    console.log("inside getAllModules ");
    return res.status(200).json({ modules });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getModuleByID = async (req, res) => {
  const id = req.params.id;
  await modulee.findByPk(id , {
  include : [{
    model : matiere
  },
  {
    model : filiere
  }
]
}).then(mod => res.send(mod))
  .catch(err => res.status(500).send({error : err}));
}

const updateModule = async (req ,res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id);
  console.log(`updatedData ${updatedData}`);

  modulee.update(updatedData , {where : {id}})
    .then(updatedModule => res.status(200).send(updatedModule))
    .catch(err => res.status(500).send({error : err}))
}


const deleteModuleByID = async (req ,res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();
 
  modulee.destroy({
   where: {id}
  }).then(() => {
   res.status(204).end();
  });}



module.exports = {
  createModule,
  getAllModules,
  getModuleByID,
  updateModule,
  deleteModuleByID
};
