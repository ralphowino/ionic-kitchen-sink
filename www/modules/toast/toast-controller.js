(function () {
    'use strict';
    angular.module('starter')
        .controller('toastCtrl', toastCtrl);
    toastCtrl.$inject = ['$cordovaToast'];

    function toastCtrl($cordovaToast) {
        var vm = this;
        vm.toast = toast;

        function toast() {
            $cordovaToast.show('This is a toast from Jedi Master Yoda, after the execution of order 66', 'long', 'top')
                .then(function (success) {
                    // success
                }, function (error) {
                    // error
                });
        }
    }
})();


