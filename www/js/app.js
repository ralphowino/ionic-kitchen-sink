angular.module('starter', ['ionic', 'ngCordova', 'ngLodash', 'ionic.contrib.ui.tinderCards2'])

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
                templateUrl: 'templates/menu.html',
                abstract: true,
                controller: 'menuCtrl',
                controllerAs: 'menu'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    menuContent: {
                        templateUrl: 'templates/home.html',
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('app.native', {
                url: "/native",
                views: {
                    menuContent: {
                        templateUrl: 'templates/native.html',
                        controller: 'nativeCtrl',
                        controllerAs: 'native'
                    }
                }
            })
            .state('app.cordova', {
                url: "/cordova",
                views: {
                    menuContent: {
                        templateUrl: 'templates/cordova.html',
                        controller: 'cordovaCtrl',
                        controllerAs: 'cordova'
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
            .state('app.sidebar', {
                url: '/sidebar',
                views: {
                    menuContent: {
                        templateUrl: 'templates/sidebar.html',
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
            .state('app.popup-alerts', {
                url: '/popup',
                views: {
                    menuContent: {
                        templateUrl: 'templates/popup.html',
                        controller: 'popupCtrl',
                        controllerAs: 'popup'
                    }
                }
            })
            .state('app.cards', {
                url: '/cards',
                views: {
                    menuContent: {
                        templateUrl: 'templates/cards.html',
                        controller: 'cardsCtrl',
                        controllerAs: 'cards'
                    }
                }
            })
            .state('app.headers-footers', {
                url: '/headers-footers',
                views: {
                    menuContent: {
                        templateUrl: 'templates/headers-footers.html',
                        controller: 'headersCtrl',
                        controllerAs: 'headers'
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
            })
            .state('app.tabs', {
                url: '/tabs',
                views: {
                    menuContent: {
                        templateUrl: 'templates/tabs.html',
                        controller: 'tabsCtrl',
                        controllerAs: 'tabs'
                    }
                }
            })
            .state('app.browser', {
                url: '/browser',
                views: {
                    menuContent: {
                        templateUrl: 'templates/browser.html',
                        controller: 'browserCtrl',
                        controllerAs: 'browser'
                    }
                }
            })
            .state('app.geo', {
                url: '/geo',
                views: {
                    menuContent: {
                        templateUrl: 'templates/geo.html',
                        controller: 'geoCtrl',
                        controllerAs: 'geo'
                    }
                }
            })
            .state('app.vibration', {
                url: '/vibration',
                views: {
                    menuContent: {
                        templateUrl: 'templates/vibration.html',
                        controller: 'vibrationCtrl',
                        controllerAs: 'vibration'
                    }
                }
            })
            .state('app.file', {
                url: '/file',
                views: {
                    menuContent: {
                        templateUrl: 'templates/file.html',
                        controller: 'fileCtrl',
                        controllerAs: 'file'
                    }
                }
            })
            .state('app.media', {
                url: '/media',
                views: {
                    menuContent: {
                        templateUrl: 'templates/media.html',
                        controller: 'mediaCtrl',
                        controllerAs: 'media'
                    }
                }
            })
            .state('app.camera', {
                url: '/camera',
                views: {
                    menuContent: {
                        templateUrl: 'templates/camera.html',
                        controller: 'cameraCtrl',
                        controllerAs: 'camera'
                    }
                }
            });
        $urlRouterProvider.otherwise("/app/home");
    });
