const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users-controllers');

// Post new User:
router.post('/', usersControllers.saveUser);

// Get One User
router.get('/:id', usersControllers.selectOne);

// Get All Users
router.get('/', usersControllers.selectAll);

// Update One User
// router.put("/:id",usersControllers)

// Delete One User
router.delete('/:id', usersControllers.deleteUser);

module.exports = router;
