const express = require('express');
const router = express.Router();
const eventsRoute = require('../controllers/events-controllers');

// Post new User:
router.post('/', eventsRoute.saveEvent);

// Get One User
router.get('/:id', eventsRoute.selectOne);

// Get All Users
router.get('/', eventsRoute.selectAll);

// Update One User
router.put("/:id",eventsRoute.update)

// Delete One User
router.delete('/:id', eventsRoute.deleteEvent);

module.exports = router;
