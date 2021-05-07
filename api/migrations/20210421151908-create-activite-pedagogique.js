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
      },
      volumeHoraire: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      groupeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "activitepedagogiques",
          key: "id",
        }},
        professeurId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "professeurs",
          key: "id",
          }},
      matiereID: {
        type: Sequelize.INTEGER,
          allowNull: false,
           references: {
             model: "matieres",
            key: "id",
            }},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("activitepedagogiques");
  },
};
