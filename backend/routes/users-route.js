const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users-controllers');

// Post new User:
router.post('/', usersControllers.saveUser);

// Get All Users
router.get('/', usersControllers.selectAll);

// Get One User
router.get('/:id', usersControllers.selectOne);


// Update One User
router.put("/:id",usersControllers.update)

// Delete One User
router.delete('/:id', usersControllers.deleteUser);

// router.get('/login/:id', usersControllers.showLoginPage)
// router.get('/singUp', usersControllers.showSingUpPage)

module.exports = router;

// api/users/login/
// api/users/singup/