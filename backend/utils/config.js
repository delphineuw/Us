const { Sequelize } = require('sequelize');
const config = require('../config/configjs')['development']

// Database Config
const dbConfig = {
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  insecureAuth: true
};
// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   insecureAuth: true
// };

// console.log({dbConfig})

// Sequelize Config
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: 'mysql'
});

module.exports = sequelize;
