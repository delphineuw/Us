'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Event_Activities',
      [
        {
          eventId: 1,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          eventId: 2,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          eventId: 3,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Event_Activities', null, {});
  }
};
