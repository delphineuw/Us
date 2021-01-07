const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users-controllers')


// Get all Users: 
router.post("/", usersControllers.saveUser)

// Get One Manga
router.get("/:id", usersControllers.selectOne)


// Get All Mangas
 router.get("/", usersControllers.selectAll)

// Update One Manga
// router.put("/:id",usersControllers)

// Delete One Manga
router.delete("/:id", usersControllers.deleteUser)

module.exports = router;