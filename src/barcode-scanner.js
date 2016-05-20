(function () {
    'use strict';
    angular.module('starter')
        .controller('barcodeCtrl', barcodeCtrl);
    barcodeCtrl.$inject = ['$cordovaBarcodeScanner'];

    function barcodeCtrl($cordovaBarcodeScanner) {
        var vm = this;
        vm.barcode = barcode;

        function barcode() {
            document.addEventListener("deviceready", function () {

                $cordovaBarcodeScanner
                    .scan()
                    .then(function (barcodeData) {
                        vm.data = barcodeData;
                    }, function (error) {
                        vm.data = error;
                    });

            }, false);
        }

    }
})();




