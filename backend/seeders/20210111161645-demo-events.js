'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Events',
      [
        {
          host: 1,
          title: 'Sport Event',
          description: 'Swim, run and bike.',
          location: 'London',
          isFinished: false,
          limited: false,
          start: new Date('December 17, 2021 03:24:00'),
          end: new Date('December 20, 2021 03:24:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          host: 2,
          title: 'Food Event',
          description: 'Eat pizzas.',
          location: 'Brussels',
          isFinished: false,
          limited: false,
          start: new Date('December 17, 2021 03:24:00'),
          end: new Date('December 20, 2021 03:24:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          host: 3,
          title: 'Party Event',
          description: 'Drink alcohol.',
          location: 'New York',
          isFinished: false,
          limited: false,
          start: new Date('December 17, 2021 03:24:00'),
          end: new Date('December 20, 2021 03:24:00'),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
