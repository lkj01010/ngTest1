/**
 * Created by Administrator on 2016/2/3.
 */

angular.module('myApp.main')

.controller('KickCtrl', ['$scope', function($scope) {
        var vm = $scope.vm = {};
        vm.cmd = '踢人';
        vm.selectCmd = function(cmd){
            vm.cmd = cmd
        }
    }]);
