/**
 * Created by Administrator on 2016/1/26.
 */
'use strict';

angular.module('myApp.login', ['ui.router', 'drag'])
//.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/login', {
//        templateUrl: 'src/login/login.html',
//        controller: 'LoginCtrl'
//    });
//}])

.controller('LoginCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $scope.myvalue = 'hello';
    $scope.login = function(){
        //$location.path('/main');
        $rootScope.$state.go('main.summary');
    }
}]);


//  http://www.tuicool.com/articles/uEB3Mj