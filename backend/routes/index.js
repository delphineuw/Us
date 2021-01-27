const express = require("express")
const router = express.Router()
const authController = require('../controllers/authentificate-controllers')
const usersRoute = require("./users-route")
const eventsRoute = require("./events-route")
const activitiesRoute = require("./activities-route")

router.use("/users", usersRoute )
router.use("/activities", activitiesRoute )
router.use("/events",
//  authController.isAuthenticated, 
 eventsRoute )



module.exports = router;