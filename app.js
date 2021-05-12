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
const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter);

// Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: 'Not found' });
});

module.exports = app;
