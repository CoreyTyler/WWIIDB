const express = require('express');
const router = express.Router();
const iatweaponsController = require('../Controllers/iatweapons')

router.get('/iatweapons', iatweaponsController.getIatweapons);

router.get('/iatweapons/:id', iatweaponsController.getId);

router.get('/iatweapons/name', iatweaponsController.getName);

router.get('/iatweapons/country', iatweaponsController.getCountry);

module.exports = router