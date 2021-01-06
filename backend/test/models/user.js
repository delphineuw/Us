const { DataTypes } = require('sequelize');

// Local imports
const sequelize = require('../../utils/config');

// Sequelize Model
const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
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
    await User.sync();
    console.log('The table for the User model was just (re)created!');
  } catch (error) {
    console.error('Unable to sync Users:', error);
  }
})();

module.exports = User;
