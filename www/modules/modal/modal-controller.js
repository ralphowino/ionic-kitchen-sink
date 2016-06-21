(function () {
    'use strict';
    angular.module('starter')
        .controller('modalCtrl', modalCtrl);
    modalCtrl.$inject = ['$ionicModal', '$scope'];

    function modalCtrl($ionicModal, $scope) {
        var vm = this;
        vm.modal = {};

        vm.show = show;
        vm.hide = hide;
        vm.showSecond = showSecond;
        vm.hideSecond = hideSecond;

        init();

        function init() {
            $ionicModal.fromTemplateUrl('modules/modal/my-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                vm.modal = modal;
            });
        }

        function show() {
            $ionicModal.fromTemplateUrl('modules/modal/another-modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                vm.secModal = modal;
            });
            vm.modal.show();
        }

        function hide() {
            vm.modal.hide();
        }

        function showSecond() {
            vm.secModal.show();
        }

        function hideSecond() {
            vm.secModal.hide();
        }
    }
})();

