const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users-controllers');
const authController = require('../controllers/authentificate-controllers');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Post new User:
router.post('/', usersControllers.saveUser);

// Get All Users
router.get('/', usersControllers.selectAll);

// Get One User
router.get('/:id', usersControllers.selectOne);

// Update One User
router.put('/:id', usersControllers.update);

// Delete One User
router.delete('/:id', usersControllers.deleteUser);

module.exports = router;
