(function () {
    'use strict';
    angular.module('starter')
        .controller('basicCtrl', basicCtrl);
    basicCtrl.$inject = ['$scope'];

    function basicCtrl($scope) {
        $scope.search = '';
    }
})();

