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

        vm.src = "C:/Users/Samuel Ndara/Downloads/Music/Work From Home.mp3";
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


