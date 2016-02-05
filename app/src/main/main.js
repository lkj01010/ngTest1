'use strict';

angular.module('myApp.main', ['ui.router'])

.config(
    ['$stateProvider',
        function($stateProvider) {
            $stateProvider

                .state("main.summary", {
                    url: "/summary",
                    templateUrl: "src/main/summary/summary.html",
                    controller: "MainCtrl"
                })
                .state("main.gamestat", {
                    url: "/gamestat",
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
                //.state("main.kick", {
                //    url: "/kick",
                //    templateUrl: "src/main/kick/kick.html",
                //    controller: "KickCtrl"
                //})
                .state("main.edit", {
                    url: "/edit",
                    abstract: true,
                    templateUrl: "src/main/edit/edit.html",
                    controller: "EditCtrl"
                })

        }
    ]
)


//    .config(
//    ['$stateProvider',
//        function($stateProvider) {
//            $stateProvider
//                .state("main.kick", {
//                    url: "/kick",
//                    templateUrl: "src/main/kick/kick.html",
//                    controller: "KickCtrl"
//                })
//        }
//    ]
//)

.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        var vm = $scope.vm = {};
        //vm.activeTab = 1;
        //alert(vm.activeTab);

        //$rootScope.$on("$routeChangeStart", function(event, next, current) {
        //    $location.path('/main/edit01');
        //});
    }])




//  http://www.tuicool.com/articles/uEB3Mj