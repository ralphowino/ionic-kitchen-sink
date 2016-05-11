(function () {
    'use strict';
    angular.module('starter')
        .controller('tabsCtrl', tabsCtrl);
    tabsCtrl.$inject = [];

    function tabsCtrl() {
        var vm = this;
        vm.init = init;

        init();

        function init(){

        }
    }
})();

