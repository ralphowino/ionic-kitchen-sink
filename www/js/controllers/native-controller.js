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
                    name: 'Action Sheet',
                    page: 'app.sheet',
                    tags: ['action sheet']
                },
                {
                    name: 'Backdrop',
                    page: 'app.backdrop',
                    tags: ['retain', 'release']
                },
                {
                    name: 'Buttons',
                    page: 'app.buttons',
                    tags: ['colors', 'sizes', 'icon buttons', 'block button', 'outlined button', 'button bar', 'full width button']
                },
                {
                    name: ' Cards',
                    page: 'app.cards',
                    tags: ['card', 'card headers', 'card footers', 'list card', 'card images', 'card showcase']
                },
                {
                    name: 'Form Elements',
                    page: 'app.form-elements',
                    tags: ['radio', 'checkbox', 'toggle', 'range', 'select', 'elements', 'text', 'password', 'email', 'tel', 'search', 'number', 'date', 'month']
                },
                {
                    name: 'Grid',
                    page: 'app.grid',
                    tags: ['col', 'row']
                },
                {
                    name: 'Gestures',
                    page: 'app.gestures',
                    tags: ['gestures','on-hold', 'on-tap', 'on-double-tap', 'on-touch', 'on-release', 'on-drag', 'on-drag-up',
                        'on-drag-down', 'on-drag-left', 'on-drag-right', 'on-swipe', 'on-swipe-up', 'on-swipe-right',
                        'on-swipe-down', 'on-swipe-left'
                    ]
                },
                {
                    name: 'Headers and Footers',
                    page: 'app.headers-footers',
                    tags: ['bar-light', 'bar-stable', 'bar-positive', 'bar-calm', 'bar-balanced', 'bar-energized', 'bar-assertive', 'bar-royal', 'bar-dark', 'header', 'footer']
                },
                {
                    name: 'Ion Content Refresher',
                    page: 'app.content',
                    tags: ['refresh', 'content', 'refresher']
                },
                {
                    name: 'Ion Scroll',
                    page: 'app.scroll',
                    tags: ['scroll']
                },
                {
                    name: 'Keyboard',
                    page: 'app.keyboard',
                    tags: ['keyboard']
                },
                {
                    name: 'List View',
                    page: 'app.list-view',
                    tags: ['list', 'inset list', 'thumbnails', 'list buttons', 'avatar', 'list icons', 'list divider']
                },
                {
                    name: 'Loading',
                    page: 'app.loading',
                    tags: ['show', 'hide']
                },
                {
                    name: 'Modal',
                    page: 'app.modal',
                    tags: ['modal']
                },
                {
                    name: 'Popover',
                    page: 'app.popover',
                    tags: ['popover']
                },
                {
                    name: 'Popup Alerts',
                    page: 'app.popup-alerts',
                    tags: ['show popup', 'confirm popup', 'prompt popup', 'alert popup']
                },
                {
                    name: 'Spinners',
                    page: 'app.spinners',
                    tags: ['spinner-energized', 'android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
                },
                {
                    name: 'Tabs',
                    page: 'app.tabs',
                    tags: ['tabs', 'icon tabs']
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

            if (search.trim() == '') {
                init();
            } else {
                var items = vm.nativeElements.elements;
                vm.filteredElements = _.filter(items, function (item) {
                    return (item.tags.indexOf(search) > -1);
                });
            }
        }
    }
})();

