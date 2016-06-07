(function () {
    'use strict';
    angular.module('starter')
        .controller('popoverCtrl', popoverCtrl);
    popoverCtrl.$inject = ['$ionicPopover','$scope'];

    function popoverCtrl($ionicPopover, $scope) {
        var vm = this;

        vm.show = show;
        vm.hide = hide;

        vm.popover = {};

        init();

        function init() {
            $ionicPopover.fromTemplateUrl('modules/popover/my-popover.html', {
                scope: $scope
            }).then(function (popover) {
                vm.popover = popover;
            });
        }

        function show($event) {
            vm.popover.show($event);
        }

        function hide(){
            vm.popover.hide();
        }

    }
})();


