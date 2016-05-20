(function () {
    'use strict';
    angular.module('starter')
        .controller('cameraCtrl', cameraCtrl);
    cameraCtrl.$inject = ['$cordovaCamera'];

    function cameraCtrl($cordovaCamera) {
        var vm = this;
        vm.getPhoto = getPhoto;

        vm.quality = 100;
        vm.targetWidth = 100;
        vm.targetHeight = 100;

        function getPhoto() {
            document.addEventListener("deviceready", function () {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    quality: vm.quality,
                    targetWidth: vm.targetWidth,
                    targetHeight: vm.targetHeight
                };

                $cordovaCamera.getPicture(options).then(function (imageURI) {
                    vm.imageSrc = imageURI;
                }, function (err) {
                    // error
                });
            }, false);

        }
    }
})();


