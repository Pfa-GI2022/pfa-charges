"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("professeurs", {
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
      prenom: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      dateNaissance: {
        type: Sequelize.DATE,
      },
      grade: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      depID: {
        type: Sequelize.INTEGER,
        references: {
          model: "departements",
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
    await queryInterface.dropTable("professeurs");
  },
};
