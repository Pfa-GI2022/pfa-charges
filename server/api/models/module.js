"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      this.belongsTo(models.departement,{foreignKey : 'depID'});
      this.belongsToMany(models.filiere, { through: 'modulefiliere' });
      this.belongsToMany(models.matiere, { through: 'modulematiere' });
//this.belongsTo(models.filiere, {foreignKey : 'filiereID'});a

=======
      this.belongsTo(models.departement, { foreignKey: "depID" });
      this.hasMany(models.matiere, {
        foreignKey: "moduleId",
      });
      this.belongsTo(models.filiere, {
        foreignKey: "filID",
      });
>>>>>>> d853f9518c1da8769bfc743afd8553b1723214be
    }
  }
  module.init(
    {
      nom: DataTypes.STRING,
      semestre: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "module",
    }
  );
  return module;
};
