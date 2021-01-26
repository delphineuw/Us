const express = require('express');
const router = express.Router();
const controllers = require('../controllers/events-controllers');

// Post new User:
router.post('/', controllers.saveEvent);

// Get One User
router.get('/:id', controllers.selectOne);

// Get All Users
router.get('/', controllers.selectAll);

// Update One User
router.put('/:id', controllers.update);

// Delete One User
router.delete('/:id', controllers.deleteEvent);

module.exports = router;
