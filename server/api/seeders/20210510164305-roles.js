'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "professeur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chefDeFiliere",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chefDeDepartement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
     await queryInterface.bulkInsert(
      "roles",
      [
        {
          name: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "professeur",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chefDeFiliere",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "chefDeDepartement",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
