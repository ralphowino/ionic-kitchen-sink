(function () {
    'use strict';
    angular.module('starter')
        .controller('menuCtrl', menuCtrl);
    menuCtrl.$inject = ['$state', '$cordovaInAppBrowser', 'Env'];

    function menuCtrl($state, $cordovaInAppBrowser, Env) {
        var vm = this;
        vm.init = init;
        vm.goToPage = goToPage;
        vm.visible = visible;

        vm.components = {};

        function init() {

        }

        function goToPage() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };

            var url = '';

            if ($state.current.name == 'app.buttons') {
                url = Env.srcUrl + 'buttons.html';
            } else if ($state.current.name == 'app.form-elements') {
                url = Env.srcUrl + 'form-elements.html';
            } else if ($state.current.name == 'app.list-view') {
                url = Env.srcUrl + 'list-view.html';
            } else if ($state.current.name == 'app.tabs') {
                url = Env.srcUrl + 'tabs.html';
            } else if ($state.current.name == 'app.popup-alerts') {
                url = Env.srcUrl + 'popup.js';
            } else if ($state.current.name == 'app.cards') {
                url = Env.srcUrl + 'cards.html';
            } else if ($state.current.name == 'app.headers-footers') {
                url = Env.srcUrl + 'headers-footers.html';
            } else if ($state.current.name == 'app.spinners') {
                url = Env.srcUrl + 'spinners.html';
            } else if ($state.current.name == 'app.camera') {
                url = Env.srcUrl + 'camera.js';
            } else if ($state.current.name == 'app.browser') {
                url = Env.srcUrl + 'inappbrowser.js';
            } else if ($state.current.name == 'app.geo') {
                url = Env.srcUrl + 'geolocation.js';
            } else if ($state.current.name == 'app.vibration') {
                url = Env.srcUrl + 'vibration.js';
            } else if ($state.current.name == 'app.file') {
                url = Env.srcUrl + 'file-transfer.js';
            } else if ($state.current.name == 'app.media') {
                url = Env.srcUrl + 'media.js';
            } else if ($state.current.name == 'app.action') {
                url = Env.srcUrl + 'action-sheet.js';
            } else if ($state.current.name == 'app.availability') {
                url = Env.srcUrl + 'app-availability.js';
            } else if ($state.current.name == 'app.barcode') {
                url = Env.srcUrl + 'barcode-scanner.js';
            } else if ($state.current.name == 'app.date') {
                url = Env.srcUrl + 'datepicker.js';
            } else if ($state.current.name == 'app.toast') {
                url = Env.srcUrl + 'toast.js';
            } else if ($state.current.name == 'app.email') {
                url = Env.srcUrl + 'email-composer.js';
            } else if ($state.current.name == 'app.social') {
                url = Env.srcUrl + 'social-sharing.js';
            }

            $cordovaInAppBrowser.open(url, '_system', options)
                .then(function (event) {
                    // success
                })
                .catch(function (event) {
                    // error
                });
        }

        function visible() {
            if ($state.current.name == 'app.home' || $state.current.name == 'app.native' || $state.current.name == 'app.cordova') {
                return false;
            }
            return true;
        }
    }
})();

