(function () {
    'use strict';
    angular.module('starter')
        .controller('slidesCtrl', slidesCtrl);
    slidesCtrl.$inject = ['$ionicSlideBoxDelegate', '$state', '$window'];

    function slidesCtrl($ionicSlideBoxDelegate, $state, $window) {
        var vm = this;

        vm.startApp = startApp;
        vm.previous = previous;
        vm.next = next;
        vm.slideHasChanged = slideHasChanged;

        vm.slideIndex = 0;

        init();

        function init() {
            if ($window.localStorage.getItem('tutorialCheck') == true) {
                $state.go('app.home');
            } else {
                $window.localStorage.setItem('tutorialCheck', true);
            }
        }

        function startApp() {
            $state.go('app.home');
        }

        function previous() {
            $ionicSlideBoxDelegate.previous();
        }

        function next() {
            $ionicSlideBoxDelegate.next();
        }

        function slideHasChanged(index) {
            vm.slideIndex = index;
        }
    }
})();

