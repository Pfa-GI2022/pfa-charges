'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class activite_matiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.matiere , {
        as : 'matiere',
        foreignKey : 'matiereID'
      });

      this.belongsTo(models.activitePedagogique , {
        as : 'activite',
        foreignKey : 'activiteID'
      })
    }
  };
  activite_matiere.init({
    matiereID: DataTypes.INTEGER,
    activiteID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'activite_matiere',
  });
  return activite_matiere;
};