"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("charges", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      chargeTotal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      profID: {
        type: Sequelize.INTEGER,
        references: {
          model: "professeurs",
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("charges");
  },
};
