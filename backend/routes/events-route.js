const express = require('express');
const router = express.Router();
const eventsRoute = require('../controllers/events-controllers');

// Post new Event:
router.post('/', eventsRoute.saveEvent);

// Get One Event
router.get('/:id', eventsRoute.selectOne);

// Get All Events
router.get('/', eventsRoute.selectAll);

// Update One Event
router.put("/:id",eventsRoute.update)

// Delete One Event
router.delete('/:id', eventsRoute.deleteEvent);

module.exports = router;
