(function () {
    'use strict';
    angular.module('starter')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$cordovaEmailComposer', '$cordovaInAppBrowser', '$ionicActionSheet', '$state', '$window'];

    function homeCtrl($cordovaEmailComposer, $cordovaInAppBrowser, $ionicActionSheet, $state, $window) {
        var vm = this;
        vm.goToIntroduction = goToIntroduction;
        vm.feedback = feedback;
        init();

        function init() {

        }

        function goToIntroduction() {
            $window.localStorage.removeItem('tutorialCheck');
            $state.go('app.slides');
        }

        function feedback() {
            $ionicActionSheet.show({
                buttons: [
                    {text: 'Send Us an Email'},
                    {text: 'Send an Issue'}
                ],
                titleText: 'Give Us Feedback',
                cancelText: 'Cancel',
                cancel: function () {

                },
                buttonClicked: function (index) {
                    if (index == 0) {
                        $cordovaEmailComposer.isAvailable().then(function () {
                            var email = {
                                to: 'hello@ralphowino.com',
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
                    if (index == 1) {
                        var options = {
                            location: 'yes',
                            clearcache: 'yes',
                            toolbar: 'no'
                        };
                        var url = 'http://git.ralphowino.com/ro/ionic-kitchen-sink/issues';
                        $cordovaInAppBrowser.open(url, '_system', options)
                            .then(function (event) {
                                // success
                            })
                            .catch(function (event) {
                                // error
                            });
                    }
                    return true;
                }
            });
        }
    }
})();

