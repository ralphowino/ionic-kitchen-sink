(function () {
    'use strict';
    angular.module('starter')
        .controller('dateCtrl', dateCtrl);
    dateCtrl.$inject = ['$cordovaDatePicker'];

    function dateCtrl($cordovaDatePicker) {
        var vm = this;
        vm.datePicked = '';
        vm.date = date;

        function date() {
            var options = {
                date: new Date(),
                mode: 'date',
                minDate: new Date() - 10000,
                allowOldDates: true,
                allowFutureDates: false,
                doneButtonLabel: 'DONE',
                doneButtonColor: '#F2F3F4',
                cancelButtonLabel: 'CANCEL',
                cancelButtonColor: '#000000'
            };

            document.addEventListener("deviceready", function () {

                $cordovaDatePicker.show(options).then(function (date) {
                    vm.datePicked = date;
                });

            }, false);
        }

    }
})();


