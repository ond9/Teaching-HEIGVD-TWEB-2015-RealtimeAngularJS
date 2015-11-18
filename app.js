

var express = require('express'),
  config = require('./config/config');

var app = express();




require('./config/express')(app, config);

var server = app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

//var io = require('socket.io')(server);

var moduleIO = require('socket.io');
var io = new Server(server);

	var stats = {};
	stats.yes = 0;
	stats.no = 0;
	stats.idk = 0;
	
io.on('connection', function(socket){ 
	console.log('new client connected !!!!!!!!!!!!!!!!!!!');
	

	
	
	socket.on('message', function(message) {
		if(message == 'yes')
			stats.yes++;
		else if(message == 'no')
			stats.no++;
		else if(message == 'idk')
			stats.idk++;
		else if(message == 'reset'){
			stats.yes = 0;
			stats.no = 0;
			stats.idk = 0;
		}
		
		console.log(stats);
		
		socket.broadcast.emit('votes', stats);
		socket.emit('votes', stats);
		
	});
	
	
});




