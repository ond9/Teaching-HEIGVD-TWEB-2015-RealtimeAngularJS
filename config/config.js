var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
	 
	 // set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'realtimeexercice'
    },
    port: 3000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'realtimeexercice'
    },
    port: 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'realtimeexercice'
    },
    port: 3000,
  }
};

module.exports = config[env];
