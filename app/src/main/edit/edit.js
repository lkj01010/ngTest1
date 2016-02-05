/**
 * Created by Midstream on 16/2/5.
 */

angular.module('myApp.main')
//    .config(
//    ['$stateProvider',
//        function($stateProvider) {
//            $stateProvider
//                .state("main.edit01", {
//                    url: "/summary",
//                    templateUrl: "src/main/edit/page01.html",
//                    controller: "MainCtrl"
//                })
//                .state("main.edit02", {
//                    url: "/summary",
//                    templateUrl: "src/main/edit/page02.html",
//                    controller: "MainCtrl"
//                })
//                .state("main.edit03", {
//                    url: "/summary",
//                    templateUrl: "src/main/edit/page03.html",
//                    controller: "MainCtrl"
//                })
//        }
//    ]
//)
    .config(
    ['$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state("main.kick", {
                    url: "/kick",
                    templateUrl: "src/main/kick/kick.html",
                    controller: "KickCtrl"
                })



                .state("main.edit.edit01", {
                    url: "/edit01",
                    templateUrl: "src/main/edit/page01.html",
                    //controller: "EditCtrl"
                })
                .state("main.edit.edit02", {
                    url: "/edit02",
                    templateUrl: "src/main/edit/page02.html",
                    //controller: "EditCtrl"
                })
                .state("main.edit.edit03", {
                    url: "/edit03",
                    templateUrl: "src/main/edit/page03.html",
                    //controller: "EditCtrl"
                })
        }
    ]
)

    .controller('EditCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
        var vm = $scope.vm = {};
        vm.goPage = function(pageIdx){
            if(pageIdx == 1){
                $rootScope.$state.go('main.edit.edit01');
            }
            else if(pageIdx == 2){
                $rootScope.$state.go('main.edit.edit02');
            }
            else if(pageIdx == 3){
                $rootScope.$state.go('main.edit.edit03');
            }
        }

        vm.goPage(1);
    }]);