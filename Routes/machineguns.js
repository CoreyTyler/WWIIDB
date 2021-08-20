const express = require('express');
const router = express.Router();
const machinegunsController = require('../Controllers/machineguns')

router.get('/machineguns', machinegunsController.getMachineguns);

router.get('/machineguns/:id', machinegunsController.getId);

router.get('/machineguns/name', machinegunsController.getName);

router.get('/machineguns/country', machinegunsController.getCountry);

module.exports = router

