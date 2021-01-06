const { DataTypes } = require('sequelize');

// Local imports
const sequelize = require('../utils/config');

// Sequelize Model
const Event = sequelize.define(
  'Event',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

// Sync Model(s)
(async () => {
  try {
    // await sequelize.sync({ force: true }); ==> Sync all models
    await Event.sync();
    console.log('The table for the Event model was just (re)created!');
  } catch (error) {
    console.error('Unable to sync Event:', error);
  }
})();

module.exports = Event;
