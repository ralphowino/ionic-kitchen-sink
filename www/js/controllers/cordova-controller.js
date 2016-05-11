(function () {
    'use strict';
    angular.module('starter')
        .controller('cordovaCtrl', cordovaCtrl);
    cordovaCtrl.$inject = [];

    function cordovaCtrl() {
        var vm = this;
        vm.init = init;

        vm.search = '';
        vm.filteredPlugins = [];
        vm.cordovaPlugins = {
            name: 'cordova',
            plugins: [
                {
                    name: 'Camera',
                    page: 'app.camera',
                    tags: []
                },
                {
                    name: 'InAppBrowser',
                    page: 'app.browser',
                    tags: []
                },
                {
                    name: 'Geolocation',
                    page: 'app.geo',
                    tags: []
                },
                {
                    name: 'Vibration',
                    page: 'app.vibration',
                    tags: []
                },
                {
                    name: 'File Transfer',
                    page: 'app.file',
                    tags: []
                },
                {
                    name: 'Media',
                    page: 'app.media',
                    tags: []
                }
            ],
            tags: []
        };
        init();

        function init() {
            vm.filteredPlugins = vm.cordovaPlugins.plugins;
        }
    }
})();

