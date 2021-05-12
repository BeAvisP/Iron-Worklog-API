require('dotenv').config();
const express = require('express');

//DB Configuration
require('./configs/db.config');

const app = express();

// Middleware Setup
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);
require('./configs/session.config')(app);
require('./configs/passport.config')(app);

//Routes configurations
const index = require('./routes/index');
app.use('/', index);

module.exports = app;
