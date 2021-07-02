"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class professeur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.activitePedagogique, { foreignKey: "professeurID" });
      this.belongsTo(models.departement, {
        foreignKey: "depID",
      });
      this.belongsTo(models.filiere, {
        foreignKey: "filID",
      });
      this.hasOne(models.filiere, {
        foreignKey: "chefFiliereID",
      });
      professeur.charge = this.hasOne(models.charge, {
        foreignKey: "profID",
      });
      this.hasOne(models.departement, { foreignKey: "chefDepartementID" });
    }
  }
  professeur.init(
    {
      nom: DataTypes.STRING,
      prenom: DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      dateNaissance: DataTypes.DATE,
      grade: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "professeur",
    }
  );
  return professeur;
};
