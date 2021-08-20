const express = require('express');
const router = express.Router();
const submachinegunsController = require('../Controllers/submachineguns')

router.get('/submachineguns', submachinegunsController.getSubmachineguns);

router.get('/submachineguns/:id', submachinegunsController.getId);

module.exports = router