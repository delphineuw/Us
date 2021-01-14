const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const admin = await db.Admin.findOne({ where: { email } });
    if (admin) {
      const matched = await bcrypt.compare(password, admin.password);
      if (matched) {
        return admin;
      }
    }
    return false;
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie'
});
app.use(adminBro.options.rootPath, router);

const createAdmin = async (email, password) => {
  const adminExists = await db.Admin.findOne({ where: { email } });
  if (adminExists) return;

  const newAdmin = db.Admin.build({ email, password: await bcrypt.hash(password, 10) });
  try {
    await newAdmin.save();
  } catch (error) {
    console.log('Could not create Admin.');
  }
};

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
  .then(() => createAdmin(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD))
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server up and running on port: ${process.env.PORT || 5000}!`)
    )
  )
  .catch(error => console.log('Cannot reach database: ', error));
