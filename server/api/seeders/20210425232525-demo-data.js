"use strict";
const { system } = require("faker");
const faker = require("faker");
const departement = require("../models/departement");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log("seed invoked");
    let data = [
      {
        id: 1,
        nom: faker.name.firstName(),
        prenom: faker.name.lastName(),
        avatar: "/path/avatar",
        dateNaissance: "2021-04-28",
        grade: "A",
        createdAt: faker.date.soon(),
        updatedAt: faker.date.soon(),
      },
    ];

    return await queryInterface.bulkInsert("professeurs", data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
