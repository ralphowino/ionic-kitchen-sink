(function () {
    'use strict';
    angular.module('starter')
        .controller('cardsCtrl', cardsCtrl);
    cardsCtrl.$inject = ['$ionicScrollDelegate', '$scope', '$timeout'];

    function cardsCtrl($ionicScrollDelegate, $scope, $timeout) {
        init();

        function init() {

        }
    }
})();

