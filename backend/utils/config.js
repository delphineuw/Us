const { Sequelize } = require('sequelize');

// Database Config
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'Mystrongpassword',
  database: "US",
  insecureAuth: true
};

// Sequelize Config
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql'
});

module.exports = sequelize;
