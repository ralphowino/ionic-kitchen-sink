(function () {
    'use strict';
    angular.module('starter')
        .controller('popupCtrl', popupCtrl);
    popupCtrl.$inject = ['$ionicPopup'];

    function popupCtrl($ionicPopup) {
        var vm = this;
        vm.showPopup = showPopup;
        vm.alertPopup = alertPopup;
        vm.confirmPopup = confirmPopup;
        vm.promptPopup = promptPopup;

        function showPopup() {
            var myPopup = $ionicPopup.show({
                template: 'I am a show pop up',
                title: 'Show Pop Up',
                subTitle: 'You can close me',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function alertPopup() {
            var alertPopup = $ionicPopup.alert({
                title: 'Alert Pop Up',
                template: 'I am an alert pop up'
            });

            alertPopup.then(function (res) {

            });
        }

        function confirmPopup() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Confirm Pop Up',
                template: 'Are you sure you want to leave this confirm pop up?'
            });

            confirmPopup.then(function (res) {
                if (res) {

                } else {

                }
            });
        }

        function promptPopup() {
            var promptPopup = $ionicPopup.prompt({
                title: 'Prompt Popup',
                template: 'Enter Password',
                inputType: 'password',
                inputPlaceholder: 'Password Here'
            });

            promptPopup.then(function (res) {
                console.log('Your password is', res);
            });
        }
    }
})();
