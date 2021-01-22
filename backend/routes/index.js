const express = require("express")
const router = express.Router()

const usersRoute = require("./users-route")
const eventsRoute = require("./events-route")
const activitiesRoute = require("./activities-route")

router.use("/users", usersRoute )
router.use("/activities", activitiesRoute )
router.use("/events", eventsRoute )



module.exports = router;