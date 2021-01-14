const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');

// Local imports
const db = require('./models');
const sequelize = require('./utils/config');
const routes = require('./routes');

// Express Config
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Admin
AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
  databases: [db],
  rootPath: '/admin'
});
const router = AdminBroExpress.buildRouter(adminBro);
app.use(adminBro.options.rootPath, router);

// Registered Routes
app.use('/api', routes);

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.json({ message: error.message || 'An unknown error occured.' });
});

// Server Start & Database connection
sequelize
  .authenticate()
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server up and running on port: ${process.env.PORT || 5000}!`)
    )
  )
  .catch(error => console.log('Cannot reach database: ', error));
