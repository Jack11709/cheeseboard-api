const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { port, dbURI } = require('./config/environment');
const routes = require('./config/routes');
const errorHandler = require('./lib/errorHandler');

const app = express();

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.log(`Running on port: ${port}`));
