require('dotenv').config();
const express = require('express');
const { default: sslRedirect } = require('heroku-ssl-redirect');
const path = require('path');
//DB Configuration
require('./configs/db.config');

const app = express();
app.use(sslRedirect())

// Middleware Setup
require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);
require('./configs/session.config')(app);
require('./configs/passport.config')(app);

//Routes configurations
const offDayRouter = require('./routes/offdays.routes')
const journeyRouter = require('./routes/journeys.routes');
const authRouter = require('./routes/auth.routes');

app.use('/api/offdays', offDayRouter);
app.use('/api/journeys', journeyRouter);
app.use('/api/auth', authRouter);

// ROUTE FOR SERVING REACT APP (index.html)
/* app.use((req, res, next) => {
  // If no previous routes match the request, send back the React app.
  res.sendFile(__dirname + "/public/index.html");
}); */
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



// Catch 404 and respond with error message
app.use((req, res, next) => {
  return res.status(404).json({ message: 'Not found' });
});

module.exports = app;
