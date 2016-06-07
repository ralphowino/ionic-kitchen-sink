(function () {
    'use strict';
    angular.module('starter')
        .controller('emailCtrl', emailCtrl);
    emailCtrl.$inject = ['$cordovaEmailComposer'];

    function emailCtrl($cordovaEmailComposer) {
        var vm = this;
        vm.send = send;

        vm.to = '';
        vm.subject = '';
        vm.body = '';

        function send() {
            $cordovaEmailComposer.isAvailable().then(function () {
                var email = {
                    to: vm.to,
                    subject: vm.subject,
                    body: vm.body,
                    isHtml: true
                };
                $cordovaEmailComposer.open(email).then(function () {

                }, function () {
                    console.log("User cancelled email");
                });
            }, function () {
                console.log("Email is not available");
            });
        }
    }
})();


