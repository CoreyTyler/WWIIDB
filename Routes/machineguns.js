const express = require('express');
const router = express.Router();
const machinegunsController = require('../Controllers/machineguns')

router.get('/machineguns', machinegunsController.getMachineguns);

router.get('/machineguns/:id', machinegunsController.getId);

module.exports = router

