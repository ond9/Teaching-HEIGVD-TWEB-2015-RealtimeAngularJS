
var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/template/:name.html', function(req, res) {
	console.log(req.params.name);
	res.render('template/' + req.params.name);
})

router.get('/', function (req, res, next) {
    res.render('index', {
      title: 'MyFirstAngularJSRealtimeCharts',
    });
});
