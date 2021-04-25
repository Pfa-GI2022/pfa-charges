'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log("seed invoked");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
