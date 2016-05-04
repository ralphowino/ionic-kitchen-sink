angular.module('starter', ['ionic'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: 'templates/menu.html'
            })
            .state('app.home', {
                url: "/home",
                views: {
                    menuContent: {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('app.buttons', {
                url: '/buttons',
                views: {
                    menuContent: {
                        templateUrl: 'templates/buttons.html',
                        controller: 'buttonsCtrl'
                    }
                }
            })
            .state('app.form-elements', {
                url: '/form',
                views: {
                    menuContent: {
                        templateUrl: 'templates/form-elements.html',
                        controller: 'formCtrl'
                    }
                }
            })
            .state('app.list-view', {
                url: '/list',
                views: {
                    menuContent: {
                        templateUrl: 'templates/list-view.html',
                        controller: 'listCtrl'
                    }
                }
            })
            .state('app.tabs', {
                url: '/tabs',
                views: {
                    menuContent: {
                        templateUrl: 'templates/tabs.html',
                        controller: 'tabsCtrl'
                    }
                }
            })
            .state('app.popup-alerts', {
                url: '/popup',
                views: {
                    menuContent: {
                        templateUrl: 'templates/popup.html',
                        controller: 'popupCtrl'
                    }
                }
            })
            .state('app.cards', {
                url: '/cards',
                views: {
                    menuContent: {
                        templateUrl: 'templates/cards.html',
                        controller: 'cardsCtrl'
                    }
                }
            })
            .state('app.headers', {
                url: '/headers',
                views: {
                    menuContent: {
                        templateUrl: 'templates/headers.html',
                        controller: 'headersCtrl'
                    }
                }
            })
            .state('app.footers', {
                url: '/footers',
                views: {
                    menuContent: {
                        templateUrl: 'templates/footers.html',
                        controller: 'footersCtrl'
                    }
                }
            })
            .state('app.spinners', {
                url: '/spinners',
                views: {
                    menuContent: {
                        templateUrl: 'templates/spinners.html',
                        controller: 'spinnersCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise("/app/home");
    });
