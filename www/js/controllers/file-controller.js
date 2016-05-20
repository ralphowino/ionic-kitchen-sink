(function () {
    'use strict';
    angular.module('starter')
        .controller('fileCtrl', fileCtrl);
    fileCtrl.$inject = ['$timeout', '$cordovaFileTransfer'];

    function fileCtrl($timeout, $cordovaFileTransfer) {
        var vm = this;
        vm.download = download;

        function download() {
            document.addEventListener('deviceready', function () {

                var url = "http://vignette2.wikia.nocookie.net/disney/images/9/95/Master_Yoda.png";
                var targetPath = cordova.file.externalDataDirectory + "yoda.png";
                var trustHosts = true;
                var options = {};

                $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                    .then(function (result) {
                        vm.result = result;
                    }, function (err) {
                        vm.result = err;
                    }, function (progress) {
                        $timeout(function () {
                            vm.downloadProgress = (progress.loaded / progress.total) * 100;
                        });
                    });

            }, false);

        }
    }
})();


