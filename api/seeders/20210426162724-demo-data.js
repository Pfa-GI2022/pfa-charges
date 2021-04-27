'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('departements', [
      {
      nom : 'sciences humaines',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ], {});

    await queryInterface.bulkInsert('professeurs', [
      {
      nom : 'Saber',
      prenom : 'mohammed',
      avatar : './images/saber.jpg',
      dateNaissance : new Date(),
      grade : 'A',
      depID : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
      {
      nom : 'bouchentouf',
      prenom : 'mohammed',
      avatar : './images/saber.jpg',
      dateNaissance : new Date(),
      grade : 'A',
      depID : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
      {
      nom : 'koulali',
      prenom : 'mohammed',
      avatar : './images/saber.jpg',
      dateNaissance : new Date(),
      grade : 'A',
      depID : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
  ], {});    

  await queryInterface.bulkInsert('departements', [
    {
    nom : 'mecanique et math',
    chefDepartementID : 2,
    createdAt : new Date(),
    updatedAt : new Date()
  }
], {});

await queryInterface.bulkInsert('charges', [
  {
  chargeTotal : 16,
  profID : 2,
  createdAt : new Date(),
  updatedAt : new Date()
}
], {});
  
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
