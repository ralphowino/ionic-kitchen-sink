(function () {
    'use strict';
    angular.module('starter')
        .controller('gesturesCtrl', gesturesCtrl);
    gesturesCtrl.$inject = ['$ionicPopup'];

    function gesturesCtrl($ionicPopup) {
        var vm = this;
        vm.drag = 'On Drag';
        vm.dragUp = 'On Drag Up ';
        vm.dragDown = 'On Drag Down';
        vm.dragRight = 'On Drag Right ';
        vm.dragLeft = 'On Drag Left';

        vm.onHold = onHold;
        vm.onTap = onTap;
        vm.onDoubleTap = onDoubleTap;
        vm.onTouch = onTouch;
        vm.onRelease = onRelease;
        vm.onDrag = onDrag;
        vm.onDragUp = onDragUp;
        vm.onDragRight = onDragRight;
        vm.onDragLeft = onDragLeft;
        vm.onDragDown = onDragDown;
        vm.onSwipe = onSwipe;
        vm.onSwipeUp = onSwipeUp;
        vm.onSwipeRight = onSwipeRight;
        vm.onSwipeDown = onSwipeDown;
        vm.onSwipeLeft = onSwipeLeft;

        function onHold() {
            var myPopup = $ionicPopup.show({
                template: 'Touch stays at the same location for 500ms.',
                title: 'On Hold',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onTap() {
            var myPopup = $ionicPopup.show({
                template: 'Quick touch at a location',
                title: 'On Tap',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onDoubleTap() {
            var myPopup = $ionicPopup.show({
                template: 'Double tap touch at a location.',
                title: 'On Double Tap',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onTouch() {
            var myPopup = $ionicPopup.show({
                template: 'Called immediately when the user first begins a touch.',
                title: 'On Touch',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onRelease() {
            var myPopup = $ionicPopup.show({
                template: 'Called when the user ends a touch.',
                title: 'On Release',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onDrag() {
            vm.drag = 'Dragging...';
        }

        function onDragUp() {
            vm.dragUp = 'Dragging Up...';
        }

        function onDragRight() {
            vm.dragRight = 'Dragging Right...';
        }

        function onDragLeft() {
            vm.dragLeft = 'Dragging Left...';
        }

        function onDragDown() {
            vm.dragDown = 'Dragging Down...';
        }

        function onSwipe() {
            var myPopup = $ionicPopup.show({
                template: 'Called when a moving touch has a high velocity in any direction.',
                title: 'On Swipe',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onSwipeUp() {
            var myPopup = $ionicPopup.show({
                template: 'Called when a moving touch has a high velocity moving up.',
                title: 'On Swipe Up',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onSwipeLeft() {
            var myPopup = $ionicPopup.show({
                template: 'Called when a moving touch has a high velocity moving to the left.',
                title: 'On Swipe Left',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onSwipeRight() {
            var myPopup = $ionicPopup.show({
                template: 'Called when a moving touch has a high velocity moving to the right.',
                title: 'On Swipe Right',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }

        function onSwipeDown() {
            var myPopup = $ionicPopup.show({
                template: 'Called when a moving touch has a high velocity moving down.',
                title: 'On Swipe Down',
                subTitle: '',
                scope: null,
                buttons: [
                    {
                        text: '<b>Close</b>',
                        type: 'button-positive',
                        onTap: function () {
                            myPopup.close();
                        }
                    }
                ]
            });
        }


    }
})();



