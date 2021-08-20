const express = require('express');
const router = express.Router();
const riflesController = require('../Controllers/rifles')

router.get('/rifles', riflesController.getRifles);

router.get('/rifles/:id', riflesController.getId);

module.exports = router