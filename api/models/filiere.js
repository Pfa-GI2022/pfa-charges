"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class filiere extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.professeur, { foreignKey: "chefFiliereID" });
    }
  }
  filiere.init(
    {
      nom: DataTypes.STRING,
      nbreGroupesTd: DataTypes.INTEGER,
      nbreGroupeTp: DataTypes.INTEGER,
      nbreGroupePFA: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "filiere",
    }
  );
  return filiere;
};
