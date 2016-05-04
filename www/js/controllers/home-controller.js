(function () {
    'use strict';
    angular.module('starter')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope) {
        $scope.search = '';
    }
})();

