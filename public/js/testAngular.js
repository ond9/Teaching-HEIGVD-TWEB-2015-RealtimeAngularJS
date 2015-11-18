(function() {
	
	 var module = angular.module('myApp', ['chart.js', 'btford.socket-io', 'ui.router']);
	 
	 module.factory('mySocket', function(socketFactory) {
		return socketFactory();
	});
	 
	module.factory('votesData', function(mySocket) {
		  
		  var votes = [[10,10,10]];
		  
		  mySocket.on('votes', function(data) {
			  votes[0][0] = data.yes;
			  votes[0][1] = data.no;
			  votes[0][2] = data.idk;
			  
			  console.log(votes);
		  });
		  
		  return {
				 labels:["Yes","No","I don't know"],
				 data:votes        
			};
	  });
	  
	  module.controller('DataController', function($scope, votesData) {
		$scope.labels = votesData.labels;
      $scope.data = votesData.data;
	  });
	
	module.controller('ClickController', function($scope, mySocket) {
		$scope.clickYes = function() {
				console.log(mySocket);
				mySocket.emit('message', 'yes');
				console.log("yes");
			}
			$scope.clickNo = function() {
				console.log(mySocket);
				mySocket.emit('message', 'no');
				console.log("no");
			}
			$scope.clickIdk = function() {
				console.log(mySocket);
				mySocket.emit('message', 'idk');
				console.log("idk");
			}
			
			$scope.clickReset = function() {
				console.log(mySocket);
				mySocket.emit('message', 'reset');
				console.log("idk");
			}
			
	});
	
	
	
	module.config(function( $stateProvider, $urlRouterProvider, $locationProvider ) {
		
		console.log('test2');
		$urlRouterProvider.when('', '/');
		
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
		
		$stateProvider.state('home', {
			templateUrl: '/template/home.html',
			url: '/'
		});
		
		$stateProvider.state('audience', {
			templateUrl: '/template/audience.html',
			url: '/audience'
		});
		
		$stateProvider.state('board', {
			templateUrl: '/template/board.html',
			url: '/board'
		});
		
		$stateProvider.state('debug', {
			templateUrl: '/template/debug.html',
			url: '/debug'
		});
		
	});
	
	module.run(function($rootScope) {
		console.log('test');
			$rootScope.$on('$stateChnageStart', function() {
					console.log('state changed');
				});
				$rootScope.$on('$stateChnageError', function() {
					console.log('state error');
				});

		});
	
})();
