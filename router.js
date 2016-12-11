const express = require('express');
const router = express.Router();

const propertiesController = require('./controllers/propertiesController');

router.get('/properties', propertiesController.index);

module.exports = router;
