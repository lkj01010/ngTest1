'use strict';

// Declare app level module which depends on src, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.login',
    'myApp.main',
    'myApp.view2',
    'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});
}]);
