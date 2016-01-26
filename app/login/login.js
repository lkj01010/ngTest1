/**
 * Created by Administrator on 2016/1/26.
 */
'use strict';

angular.module('myApp.login', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', function($scope) {
        $scope.myvalue = 'hello';
    }]);


//  http://www.tuicool.com/articles/uEB3Mj