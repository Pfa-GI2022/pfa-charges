'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professeur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      // this.belongsTo(models.departement,{foreignKey : 'depID'});
      this.belongsTo(models.filiere);
      this.belongsTo(models.charge);
      this.belongsTo(models.departement);

    }
  };
  professeur.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    avatar: DataTypes.STRING,
    dateNaissance: DataTypes.DATE,
    grade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'professeur',
  });
  return professeur;
};