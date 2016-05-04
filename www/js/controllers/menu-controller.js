(function () {
    'use strict';
    angular.module('starter')
        .controller('menuCtrl', menuCtrl);
    menuCtrl.$inject = ['$state', '$cordovaInAppBrowser'];

    function menuCtrl($state, $cordovaInAppBrowser) {
        var vm = this;
        vm.goToPage = goToPage;
        vm.visible = visible;

        function goToPage() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };

            var url = '';

            if ($state.current.name == 'app.buttons') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.form-elements') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.list-view') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.tabs') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.popup-alerts') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.cards') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.headers') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.footers') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
            } else if ($state.current.name == 'app.spinners') {
                url = 'https://github.com/angular-ui/ui-router/wiki';
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
            if ($state.current.name == 'app.home' || $state.current.name == 'app.basic') {
                return false;
            }
            return true;
        }
    }
})();

