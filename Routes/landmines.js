const express = require('express');
const router = express.Router();
const landminesController = require('../Controllers/landmines')

router.get('/landmines', landminesController.getLandmines);

router.get('/landmines/:id', landminesController.getId);

router.get('/landmines/name', landminesController.getName);

router.get('/landmines/country', landminesController.getCountry);

module.exports = router
