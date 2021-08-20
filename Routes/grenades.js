const express = require('express');
const router = express.Router();
const grenadesController = require('../Controllers/grenades')

router.get('/grenades', grenadesController.getGrenades);

router.get('/grenades/:id', grenadesController.getId);

module.exports = router