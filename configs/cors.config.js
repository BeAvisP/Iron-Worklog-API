const cors = require('cors');

module.exports = (app) => {
  app.use(
    cors({
      credentials: true,
      origin: [
        process.env.PUBLIC_DOMAIN,
        'https://accounts.google.com',
        'http://account.google.com',
      ],
    })
  );
};
