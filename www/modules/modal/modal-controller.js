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
            vm.modal.show();
        }

        function hide() {
            vm.modal.hide();
        }
    }
})();

