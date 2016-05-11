(function () {
    'use strict';
    angular.module('starter')
        .controller('nativeCtrl', nativeCtrl);
    nativeCtrl.$inject = [];

    function nativeCtrl() {
        var vm = this;
        vm.init = init;
        vm.filter = filter;

        vm.search = '';
        vm.filteredElements = [];
        vm.nativeElements = {
            name: 'native',
            elements: [
                //{
                //    name: 'Side Bar',
                //    page: 'app.sidebar',
                //    tags: ['side bar']
                //},
                {
                    name: 'Buttons',
                    page: 'app.buttons',
                    tags: ['colors', 'sizes', 'icon buttons', 'block button', 'outlined button', 'button bar', 'full width button']
                },
                {
                    name: 'Form Elements',
                    page: 'app.form-elements',
                    tags: ['radio', 'checkbox', 'toggle', 'range', 'select', 'elements', 'text', 'password', 'email', 'tel', 'search', 'number', 'date', 'month']
                },
                {
                    name: 'List View',
                    page: 'app.list-view',
                    tags: ['list', 'inset list', 'thumbnails', 'list buttons', 'avatar', 'list icons', 'list divider']
                },
                {
                    name: 'Tabs',
                    page: 'app.tabs',
                    tags: ['tabs', 'icon tabs']
                },
                {
                    name: 'Popup Alerts',
                    page: 'app.popup-alerts',
                    tags: ['show popup', 'confirm popup', 'prompt popup', 'alert popup']
                },
                {
                    name: 'Headers and Footers',
                    page: 'app.headers-footers',
                    tags: ['bar-light', 'bar-stable', 'bar-positive', 'bar-calm', 'bar-balanced', 'bar-energized', 'bar-assertive', 'bar-royal', 'bar-dark', 'header', 'footer']
                },
                {
                    name: ' Cards',
                    page: 'app.cards',
                    tags: ['card', 'card headers', 'card footers', 'list card', 'card images', 'card showcase']
                },
                {
                    name: 'Spinners',
                    page: 'app.spinners',
                    tags: ['spinner-energized', 'android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
                }


            ],
            tags: []
        };
        init();

        function init() {
            vm.filteredElements = vm.nativeElements.elements;
        }

        function filter(search) {
            search = search.toLowerCase();
            var items = vm.nativeElements.elements;
            vm.filteredElements = _.filter(items, function (item) {
                return (item.tags.indexOf(search) > -1);
            });
        }
    }
})();

