'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activitepedagogiques', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nature: {
        type: Sequelize.STRING,
        allowNull : false
      },
      volumeHoraire: {
        type: Sequelize.DOUBLE,
        allowNull : false
      },
      groupeID : {
        type : Sequelize.INTEGER,
        references : {
          model : 'activitepedagogiques',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activitepedagogiques');
  }
};