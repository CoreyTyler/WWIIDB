const express = require('express');
const router = express.Router();
const riflesController = require('../Controllers/rifles')

router.get('/rifles', riflesController.getRifles);

router.get('/rifles/:id', riflesController.getId);

router.get('/rifles/name', riflesController.getName);

router.get('/rifles/country', riflesController.getCountry);

module.exports = router