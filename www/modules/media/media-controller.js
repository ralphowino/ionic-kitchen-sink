(function () {
    'use strict';
    angular.module('starter')
        .controller('mediaCtrl', mediaCtrl);
    mediaCtrl.$inject = ['$cordovaMedia','$scope'];

    function mediaCtrl($cordovaMedia,$scope) {
        var vm = this;
        vm.play = play;
        vm.pause = pause;
        vm.stop = stop;
        vm.showIcon = true;

        vm.src = '/android_asset/www/media/ode.mp3';
        vm.media = $cordovaMedia.newMedia(vm.src);
        
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

        $scope.$on('$ionicView.afterLeave', function(){
            vm.media.stop();
            vm.media.release();
        });
    }
})();


