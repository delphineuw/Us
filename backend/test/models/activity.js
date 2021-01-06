const { DataTypes } = require('sequelize');

// Local imports
const sequelize = require('../utils/config');

// Sequelize Model
const Activity = sequelize.define(
  'Activity',
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
    console.log('The table for the Activity model was just (re)created!');
  } catch (error) {
    console.error('Unable to sync Activity:', error);
  }
})();

module.exports = Activity;
