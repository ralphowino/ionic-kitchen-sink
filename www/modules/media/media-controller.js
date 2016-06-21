(function () {
    'use strict';
    angular.module('starter')
        .controller('mediaCtrl', mediaCtrl);
    mediaCtrl.$inject = ['$cordovaMedia','$state'];

    function mediaCtrl($cordovaMedia,$state) {
        var vm = this;
        vm.play = play;
        vm.pause = pause;
        vm.stop = stop;
        vm.onStateChange = onStateChange;
        vm.showIcon = true;

        vm.src = '/android_asset/www/media/ode.mp3';
        vm.media = $cordovaMedia.newMedia(vm.src);

        $state.current.onExit = vm.onStateChange();

        function play(){
            vm.media.play();
            vm.showIcon = false;
        }

        function pause(){
            vm.media.pause();
            vm.showIcon = true;
        }

        function stop(){
            vm.media.stop();
        }

        function onStateChange() {
            vm.media.stop();
        }

    }
})();


