(function () {
    'use strict';
    angular.module('starter')
        .controller('mediaCtrl', mediaCtrl);
    mediaCtrl.$inject = ['$cordovaMedia'];

    function mediaCtrl($cordovaMedia) {
        var vm = this;
        vm.play = play;
        vm.pause = pause;
        vm.stop = stop;

        vm.src = "media/ode.mp3";
        vm.media = $cordovaMedia.newMedia(vm.src);

        function play(){
            vm.media.play();
        }

        function pause(){
            vm.media.pause();
        }

        function stop(){
            vm.media.stop();
        }
    }
})();


