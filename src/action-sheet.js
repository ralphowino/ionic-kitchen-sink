(function () {
    'use strict';
    angular.module('starter')
        .controller('actionCtrl', actionCtrl);
    actionCtrl.$inject = ['$cordovaActionSheet'];

    function actionCtrl($cordovaActionSheet) {
        var vm = this;
        vm.action = action;

        function action() {
            var options = {
                title: 'What do you want with this image?',
                buttonLabels: ['Share via Facebook', 'Share via Twitter'],
                addCancelButtonWithLabel: 'Cancel',
                androidEnableCancelButton: true,
                winphoneEnableCancelButton: true,
                addDestructiveButtonWithLabel: 'Delete it'
            };


            document.addEventListener("deviceready", function () {
                $cordovaActionSheet
                    .show(options)
                    .then(function (btnIndex) {
                        var index = btnIndex;
                    });
            }, false);
        }

    }
})();


