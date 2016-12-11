const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api', router);
app.use(require('./utils/errorHandler'));
app.use(require('./utils/404handler'));

module.exports = app;
