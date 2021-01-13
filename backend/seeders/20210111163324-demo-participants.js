'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Participants',
      [
        {
          userId: 1,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 5,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Participants', null, {});
  }
};
