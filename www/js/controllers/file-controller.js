(function () {
    'use strict';
    angular.module('starter')
        .controller('fileCtrl', fileCtrl);
    fileCtrl.$inject = ['$timeout'];

    function fileCtrl($timeout) {
        var vm = this;
        vm.download = download;

        function download() {
            document.addEventListener('deviceready', function () {

                var url = "http://cdn.wall-pix.net/albums/art-space/00030109.jpg";
                var targetPath = cordova.file.documentsDirectory + "testImage.png";
                var trustHosts = true;
                var options = {};

                $cordovaFileTransfer.download(url, targetPath, options, trustHosts)
                    .then(function (result) {
                        console.log(result);
                    }, function (err) {

                    }, function (progress) {
                        $timeout(function () {
                            vm.downloadProgress = (progress.loaded / progress.total) * 100;
                        });
                    });

            }, false);

        }
    }
})();


