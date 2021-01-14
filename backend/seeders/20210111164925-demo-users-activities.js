'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User_Activities',
      [
        {
          userId: 1,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          activityId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          activityId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 6,
          activityId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User_Activities', null, {});
  }
};
