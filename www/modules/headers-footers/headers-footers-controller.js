(function () {
    'use strict';
    angular.module('starter')
        .controller('headersCtrl', headersCtrl);
    headersCtrl.$inject = [];

    function headersCtrl() {
        var vm = this;
        vm.next = next;
        vm.previous = previous;

        vm.class = [
            'bar-light',
            'bar-stable',
            'bar-positive',
            'bar-calm',
            'bar-balanced',
            'bar-energized',
            'bar-assertive',
            'bar-royal',
            'bar-dark'
        ];
        init();

        function init() {
            vm.current = 0;
            vm.name = 'bar-light';
        }

        function next() {
            if (vm.current < vm.class.length-1) {
                vm.current++;
                vm.name = vm.class[vm.current];
            }
        }

        function previous() {
            if (vm.current > 0) {
                vm.current--;
                vm.name = vm.class[vm.current];
            }
        }
    }
})();

