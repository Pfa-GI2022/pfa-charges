"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("activitepedagogiques", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nature: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      volumeHoraire: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0,
      },
      professeurID: {
        type: Sequelize.INTEGER,
        references: {
          model: "professeurs",
          key: "id",
        },
      },
      matiereID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "matieres",
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
    await queryInterface.dropTable("activitepedagogiques");
  },
};
