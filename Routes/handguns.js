const express = require('express');
const router = express.Router();
const handgunsController = require('../Controllers/handguns')

router.get('/handguns', handgunsController.getHandguns);

router.get('/handguns/:id', handgunsController.getId);

router.get('/handguns/name', handgunsController.getName);

router.get('/handguns/country', handgunsController.getCountry);

module.exports = router