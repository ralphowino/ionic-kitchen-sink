(function () {
    'use strict';
    angular.module('starter')
        .controller('cameraCtrl', cameraCtrl);
    cameraCtrl.$inject = ['$cordovaCamera'];

    function cameraCtrl($cordovaCamera) {
        var vm = this;
        vm.getPhoto = getPhoto;

        function getPhoto() {
            document.addEventListener("deviceready", function () {
                var options = {
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA
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


