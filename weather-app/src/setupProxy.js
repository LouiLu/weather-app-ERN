const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(proxy(['/api', '/weather'], { target: 'http://localhost:5000' }));
};
