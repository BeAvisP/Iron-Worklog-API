const cors = require('cors');
const whitelist = [process.env.PUBLIC_DOMAIN, process.env.PUBLIC_DOMAIN_SECURE]

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
    })
  );
};

