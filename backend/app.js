// Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Database Config
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  insecureAuth: true
};

// Sequelize Config
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql'
});

// Test Connect to Database
const tryConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

tryConnect();

// Sequelize Model
const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
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

// Test Sync Model
const trySync = async () => {
  try {
    // await sequelize.sync({ force: true }); ==> Sync all models
    await User.sync();
    console.log('The table for the User model was just (re)created!');
  } catch (error) {
    console.error('Unable to connect to sync:', error);
  }
};

trySync();

// Create User
const will = User.build({ firstName: 'Will', lastName: 'Smith' });

// Save User to Database
const saveUser = async () => {
  try {
    // const will = await User.create({ firstName: 'Will', lastName: 'Smith' });
    await will.save();
    console.log('Jane was saved to the database!');
  } catch (error) {
    console.error('Unable to save User:', error);
  }
};

saveUser();

// Delete User from Database
const deleteUser = async () => {
  try {
    await will.destroy();
    console.log('Jane was removed from the database!');
  } catch (error) {
    console.error('Unable to delete User:', error);
  }
};

// deleteUser();

// Get Users from Database
const selectAll = async () => {
  try {
    const users = await User.findAll();
    console.log('All users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to fetch:', error);
  }
};

selectAll();

// Get Users from Database
const selectOne = async () => {
  try {
    const users = await User.findAll({
      where: {
        id: 2
      }
    });
    console.log('One users:', JSON.stringify(users, null, 2));
  } catch (error) {
    console.error('Unable to fetch:', error);
  }
};

selectOne();
