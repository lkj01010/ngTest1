'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'src/main/main.html',
        controller: 'MainCtrl'
    });
}])

.controller('MainCtrl', ['$scope', function($scope) {
    $scope.myvalue = 'hello';
}]);


//  http://www.tuicool.com/articles/uEB3Mj