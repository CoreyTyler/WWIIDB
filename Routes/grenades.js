const express = require('express');
const router = express.Router();
const grenadesController = require('../Controllers/grenades')

router.get('/grenades', grenadesController.getGrenades);

router.get('/grenades/:id', grenadesController.getId);

router.get('/grenades/name', grenadesController.getName);

router.get('/grenades/country', grenadesController.getCountry);

module.exports = router