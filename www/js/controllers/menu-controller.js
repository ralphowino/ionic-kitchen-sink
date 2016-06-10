(function () {
    'use strict';
    angular.module('starter')
        .controller('menuCtrl', menuCtrl);
    menuCtrl.$inject = ['$ionicPopover', '$state', '$cordovaInAppBrowser', 'Env', '$scope', '$window'];

    function menuCtrl($ionicPopover, $state, $cordovaInAppBrowser, Env, $scope, $window) {
        var vm = this;
        vm.init = init;
        vm.goToPage = goToPage;
        vm.visible = visible;
        vm.showOptions = showOptions;
        vm.showIntroduction = showIntroduction;
        vm.page = page;

        vm.components = {};
        vm.popover = {};

        init();

        function init() {
            $ionicPopover.fromTemplateUrl('templates/context-popover.html', {
                scope: $scope
            }).then(function (popover) {
                vm.popover = popover;
            });
        }

        function showOptions($event) {
            vm.popover.show($event);
        }

        function showIntroduction() {
            $window.localStorage.removeItem('tutorialCheck');
            $state.go('app.slides');
        }

        function goToPage() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };

            var url = '';

            if ($state.current.name == 'app.buttons') {
                url = Env.srcUrl + 'buttons';
            } else if ($state.current.name == 'app.form-elements') {
                url = Env.srcUrl + 'form-elements';
            } else if ($state.current.name == 'app.list-view') {
                url = Env.srcUrl + 'list-view';
            } else if ($state.current.name == 'app.tabs') {
                url = Env.srcUrl + 'tabs';
            } else if ($state.current.name == 'app.popup-alerts') {
                url = Env.srcUrl + 'popup';
            } else if ($state.current.name == 'app.cards') {
                url = Env.srcUrl + 'cards';
            } else if ($state.current.name == 'app.headers-footers') {
                url = Env.srcUrl + 'headers-footers';
            } else if ($state.current.name == 'app.spinners') {
                url = Env.srcUrl + 'spinners';
            } else if ($state.current.name == 'app.camera') {
                url = Env.srcUrl + 'camera';
            } else if ($state.current.name == 'app.browser') {
                url = Env.srcUrl + 'browser';
            } else if ($state.current.name == 'app.geo') {
                url = Env.srcUrl + 'geo';
            } else if ($state.current.name == 'app.vibration') {
                url = Env.srcUrl + 'vibration';
            } else if ($state.current.name == 'app.file') {
                url = Env.srcUrl + 'file';
            } else if ($state.current.name == 'app.media') {
                url = Env.srcUrl + 'media';
            } else if ($state.current.name == 'app.action') {
                url = Env.srcUrl + 'action';
            } else if ($state.current.name == 'app.availability') {
                url = Env.srcUrl + 'availability';
            } else if ($state.current.name == 'app.barcode') {
                url = Env.srcUrl + 'barcode';
            } else if ($state.current.name == 'app.date') {
                url = Env.srcUrl + 'date';
            } else if ($state.current.name == 'app.toast') {
                url = Env.srcUrl + 'toast';
            } else if ($state.current.name == 'app.email') {
                url = Env.srcUrl + 'email';
            } else if ($state.current.name == 'app.social') {
                url = Env.srcUrl + 'social';
            } else if ($state.current.name == 'app.sheet') {
                url = Env.srcUrl + 'action-sheet';
            } else if ($state.current.name == 'app.backdrop') {
                url = Env.srcUrl + 'backdrop';
            } else if ($state.current.name == 'app.content') {
                url = Env.srcUrl + 'content';
            } else if ($state.current.name == 'app.gestures') {
                url = Env.srcUrl + 'gestures';
            } else if ($state.current.name == 'app.grid') {
                url = Env.srcUrl + 'grid';
            } else if ($state.current.name == 'app.loading') {
                url = Env.srcUrl + 'loading';
            } else if ($state.current.name == 'app.modal') {
                url = Env.srcUrl + 'modal';
            } else if ($state.current.name == 'app.popover') {
                url = Env.srcUrl + 'popover';
            } else if ($state.current.name == 'app.scroll') {
                url = Env.srcUrl + 'scroll';
            } else if ($state.current.name == 'app.slides') {
                url = Env.srcUrl + 'slides';
            } else if ($state.current.name == 'app.keyboard') {
                url = Env.srcUrl + 'keyboard';
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

        function page() {
            if($state.current.name == 'app.slides'){
                return false
            }
            return true;
        }
    }
})();

