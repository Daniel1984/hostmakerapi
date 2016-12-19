const express = require('express');
const router = express.Router();

router.get('/properties', require('./controllers/propertiesController').index);
router.get('/propertiesRoutes', require('./controllers/propertiesRoutesController').index);

module.exports = router;
