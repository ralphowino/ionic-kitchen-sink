(function () {
    'use strict';
    angular.module('starter')
        .controller('sheetCtrl', sheetCtrl);
    sheetCtrl.$inject = ['$ionicActionSheet', '$timeout'];

    function sheetCtrl($ionicActionSheet, $timeout) {
        var vm = this;

        vm.show = show;

        function show(){
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share</b>' },
                    { text: 'Move' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function() {

                },
                buttonClicked: function(index) {
                    return true;
                }
            });

            $timeout(function() {
                hideSheet();
            }, 2000);
        }

    }
})();
