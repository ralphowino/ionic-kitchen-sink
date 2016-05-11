(function () {
    'use strict';
    angular.module('starter')
        .controller('browserCtrl', browserCtrl);
    browserCtrl.$inject = ['$cordovaInAppBrowser'];

    function browserCtrl($cordovaInAppBrowser) {
        var vm = this;
        vm.goToPage = goToPage;

        function goToPage() {
            var options = {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            };
            var url = 'https://github.com/angular-ui/ui-router/wiki';
            $cordovaInAppBrowser.open(url, '_blank', options)
                .then(function (event) {
                    // success
                })
                .catch(function (event) {
                    // error
                });
        }
    }
})();


