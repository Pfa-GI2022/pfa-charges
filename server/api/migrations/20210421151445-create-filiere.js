"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("filieres", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      nbreGroupesTd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      nbreGroupeTp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      nbreGroupePFA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      chefFiliereID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "professeurs",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("filieres");
  },
};
