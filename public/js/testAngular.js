(function() {
	
	
	
	 var module = angular.module('myApp', ['chart.js', 'ui.router'])
	 
	 module.factory('votesData', function() {
		  var fakeData = {
				labels:["Yes","No","I don't know"],
				series:["Yes","No","I don't know"],
				data:[
					[65, 59, 80, 81, 56, 55, 40],
					[28, 48, 40, 19, 86, 27, 90]
				]
		  };
		  
		  return fakeData;
	 });
	
	module.controller('GraphController', function($scope, votesData) {
		$scope.labels = votesData.labels;
		$scope.data = votesData.data;
		$scope.series = votesData.series;
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