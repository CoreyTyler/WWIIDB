const express = require('express');
const router = express.Router();
const iatweaponsController = require('../Controllers/iatweapons')

router.get('/iatweapons', iatweaponsController.getIatweapons);

router.get('/iatweapons/:id', iatweaponsController.getId);

module.exports = router