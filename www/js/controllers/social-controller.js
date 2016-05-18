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
        vm.message = "Go home";
        vm.image = 'media/yoda.png';
        vm.link='';

        function shareTwitter() {
            console.log("tt");
            $cordovaSocialSharing.shareViaTwitter(vm.message, vm.image, vm.link)
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occurred. Show a message to the user
                });

        }

        function shareWhatsapp() {
            console.log("tt");
            $cordovaSocialSharing.shareViaWhatsApp(vm.message, vm.image, vm.link)
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occurred. Show a message to the user
                });
        }

        function shareFacebook() {
            console.log("tt");
            $cordovaSocialSharing.shareViaFacebook(vm.message, vm.image, vm.link)
                .then(function (result) {
                    // Success!
                }, function (err) {
                    // An error occurred. Show a message to the user
                });
        }

    }
})();


