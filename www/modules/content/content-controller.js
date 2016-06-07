(function () {
    'use strict';
    angular.module('starter')
        .controller('contentCtrl', contentCtrl);
    contentCtrl.$inject = ['Content', '$scope'];

    function contentCtrl(Content, $scope) {
        var vm = this;
        vm.doRefresh = doRefresh;
        vm.items = ['Harry Potter', 'Lord of the Rings', 'Chronicles of Narnia'];

        function doRefresh() {
            Content.getItems().then(
                function (data) {
                    vm.items = data;
                }, function (err) {
                    console.log(err);
                })
                .finally(function () {
                    $scope.$broadcast('scroll.refreshComplete');
                });
        }
    }
})();



