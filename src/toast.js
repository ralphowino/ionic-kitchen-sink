(function () {
    'use strict';
    angular.module('starter')
        .controller('toastCtrl', toastCtrl);
    toastCtrl.$inject = ['$cordovaToast'];

    function toastCtrl($cordovaToast) {
        var vm = this;
        vm.toast = toast;

        function toast() {
            $cordovaToast.show('Here is a message', 'long', 'center')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        }
    }
})();



