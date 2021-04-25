'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('departements','chefDepartementID',{
      type : Sequelize.INTEGER,
      references : {
        model : 'professeurs',
        key : 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('departements','chefDepartementID');

   
  }
};
