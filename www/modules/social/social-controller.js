(function () {
    'use strict';
    angular.module('starter')
        .controller('socialCtrl', socialCtrl);
    socialCtrl.$inject = ['$cordovaSocialSharing'];

    function socialCtrl($cordovaSocialSharing) {
        var vm = this;
        vm.shareTwitter = shareTwitter;
        vm.shareFacebook = shareFacebook;
        vm.shareWhatsapp = shareWhatsapp;
        vm.message = "Default message";
        vm.feedback = '';

        function shareTwitter() {
            $cordovaSocialSharing.shareViaTwitter(vm.message)
                .then(function (result) {
                    vm.feedback = 'You have shared via Twitter';
                }, function (err) {
                    // An error occurred. Show a message to the user
                });

        }

        function shareWhatsapp() {
            $cordovaSocialSharing.shareViaWhatsApp(vm.message)
                .then(function (result) {
                    vm.feedback = 'You have shared via Whatsapp';
                }, function (err) {
                    // An error occurred. Show a message to the user
                });
        }

        function shareFacebook() {
            $cordovaSocialSharing.shareViaFacebook(vm.message)
                .then(function (result) {
                    vm.feedback = 'You have shared via Facebook';
                }, function (err) {
                    // An error occurred. Show a message to the user
                });
        }

    }
})();


