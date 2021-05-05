'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.activitePedagogique, { through: 'activiteMatiere' });
      this.belongsToMany(models.module, { through: 'modulematiere' });
      this.hasMany(models.activitePedagogique);
    }
  };
  matiere.init({
    nom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matiere',
  });
  return matiere;
};