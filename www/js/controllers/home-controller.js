(function () {
    'use strict';
    angular.module('starter')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$state','$window'];

    function homeCtrl($state,$window) {
        var vm = this;
        vm.goToIntroduction = goToIntroduction;
        init();

        function init() {

        }
        
        function goToIntroduction() {
            $window.localStorage.removeItem('tutorialCheck');
            $state.go('app.slides');
        }
    }
})();

