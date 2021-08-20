const express = require('express');
const router = express.Router();
const landminesController = require('../Controllers/landmines')

router.get('/landmines', landminesController.getLandmines);

router.get('/landmines/:id', landminesController.getId);

module.exports = router
