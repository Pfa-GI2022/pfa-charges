"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activitePedagogique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.groupe, { foreignKey: "groupeID" });
      this.belongsTo(models.professeur, {
        foreignKey: "professeurID",
      });
      this.belongsTo(models.matiere, { foreignKey: "matiereID" });
    }
  }
  activitePedagogique.init(
    {
      nature: DataTypes.STRING,
      volumeHoraire: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "activitePedagogique",
    }
  );
  return activitePedagogique;
};
