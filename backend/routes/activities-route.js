const express = require('express');
const router = express.Router();
const activitiesRoute = require('../controllers/activities-controllers');

// Post new User:
router.post('/', activitiesRoute.saveActivity);

// Get One User
router.get('/:id', activitiesRoute.selectOne);

// Get All Users
router.get('/', activitiesRoute.selectAll);

// Update One User
router.put("/:id",activitiesRoute.update)

// Delete One User
router.delete('/:id', activitiesRoute.deleteActivity);

module.exports = router;
