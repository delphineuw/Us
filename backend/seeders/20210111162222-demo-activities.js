'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          title: 'Sport',
          image: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Food',
          image: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Party',
          image: 'xxx',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
  }
};
