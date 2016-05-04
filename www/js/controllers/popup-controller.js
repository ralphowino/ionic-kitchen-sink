(function () {
    'use strict';
    angular.module('starter')
        .controller('popupCtrl', popupCtrl);
    popupCtrl.$inject = ['$scope', '$ionicPopup'];

    function popupCtrl($scope, $ionicPopup) {
        $scope.showPopup = function () {
            var myPopup = $ionicPopup.show({
                template: 'I am a pop up',
                title: 'Pop Up Alert',
                subTitle: 'You can close me',
                scope: $scope,
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
