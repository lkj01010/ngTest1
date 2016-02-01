'use strict';

angular.module('myApp.main', ['ui.router'])

.config(
    ['$stateProvider',
        function($stateProvider) {
            $stateProvider

                .state("main.summary", {
                    url: "/main/summary",
                    templateUrl: "src/main/summary/summary.html",
                    controller: "MainCtrl"
                })
                .state("main.gamestat", {
                    url: "/main/gamestat",
                    //templateUrl: "src/main/gamestat/gamestat.html",
                    controller: "MainCtrl",
                    views: {
                        "": {
                            templateUrl: "src/main/gamestat/gamestat.html",
                        },
                        "uiview2": {
                            templateUrl: "src/main/summary/summary.html",
                        }
                    }
                })
        }
    ]
)

.controller('MainCtrl', ['$scope', function($scope) {
        var vm = $scope.vm = {};
        vm.activeTab = 1;
        //alert(vm.activeTab);
    }]);


//  http://www.tuicool.com/articles/uEB3Mj