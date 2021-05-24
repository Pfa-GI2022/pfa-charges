"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class charge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.professeur, { foreignKey: "profID" });
    }
  }
  charge.init(
    {
      chargeTotal: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "charge",
    }
  );
  return charge;
};
