var routes = require('../routes/index');
var hello = require('../routes/hello');
var ranking = require('../routes/ranking');
var gchart = require('../routes/gchart');
var summer = require('../routes/summer');
var winter = require('../routes/winter');
var autumn = require('../routes/autumn');
var spring = require('../routes/spring');
var cafe = require('../routes/cafe');
var dating = require('../routes/dating');
var drinking = require('../routes/drinking');

module.exports = function connectRoutes(app) {
  app.use('/', routes);
  app.use('/', hello);
  app.use('/', ranking);
  app.use('/', gchart);
  app.use('/', summer);
  app.use('/', winter);
  app.use('/', autumn);
  app.use('/', spring);
  app.use('/', cafe);
  app.use('/', dating);
  app.use('/', drinking);
};
