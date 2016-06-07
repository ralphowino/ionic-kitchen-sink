(function () {
    'use strict';
    angular.module('starter')
        .controller('tabsCtrl', tabsCtrl);
    tabsCtrl.$inject = ['$window'];

    function tabsCtrl($window) {
        var vm = this;
        vm.init = init;

        init();

        function init(){

        }

    }
})();

