angular.module('starter', ['ionic', 'ngCordova', 'ngLodash'])

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
    .constant('Env', {
        "srcUrl": "http://git.ralphowino.com/ro/ionic-kitchen-sink/tree/master/www/modules/",
        "name": "local"
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
            .state('app.media', {
                url: '/media',
                views: {
                    menuContent: {
                        templateUrl: 'modules/media/media.html',
                        controller: 'mediaCtrl',
                        controllerAs: 'media'
                    }
                }
            })
            .state('app.slides', {
                url: '/slides',
                views: {
                    menuContent: {
                        templateUrl: 'modules/slides/slides.html',
                        controller: 'slidesCtrl',
                        controllerAs: 'slides'
                    }
                }
            })
            .state('app.buttons', {
                url: '/buttons',
                views: {
                    menuContent: {
                        templateUrl: 'modules/buttons/buttons.html',
                        controller: 'buttonsCtrl'
                    }
                }
            })
            .state('app.sidebar', {
                url: '/sidebar',
                views: {
                    menuContent: {
                        templateUrl: 'modules/sidebar/sidebar.html',
                        controller: 'sideCtrl'
                    }
                }
            })
            .state('app.form-elements', {
                url: '/form',
                views: {
                    menuContent: {
                        templateUrl: 'modules/form-elements/form-elements.html',
                        controller: 'formCtrl'
                    }
                }
            })
            .state('app.sheet', {
                url: '/sheet',
                views: {
                    menuContent: {
                        templateUrl: 'modules/action-sheet/action-sheet.html',
                        controller: 'sheetCtrl',
                        controllerAs: 'sheet'
                    }
                }
            })
            .state('app.list-view', {
                url: '/list',
                views: {
                    menuContent: {
                        templateUrl: 'modules/list-view/list-view.html',
                        controller: 'listCtrl'
                    }
                }
            })
            .state('app.popup-alerts', {
                url: '/popup',
                views: {
                    menuContent: {
                        templateUrl: 'modules/popup/popup.html',
                        controller: 'popupCtrl',
                        controllerAs: 'popup'
                    }
                }
            })
            .state('app.cards', {
                url: '/cards',
                views: {
                    menuContent: {
                        templateUrl: 'modules/cards/cards.html',
                        controller: 'cardsCtrl',
                        controllerAs: 'cards'
                    }
                }
            })
            .state('app.headers-footers', {
                url: '/headers-footers',
                views: {
                    menuContent: {
                        templateUrl: 'modules/headers-footers/headers-footers.html',
                        controller: 'headersCtrl',
                        controllerAs: 'headers'
                    }
                }
            })
            .state('app.spinners', {
                url: '/spinners',
                views: {
                    menuContent: {
                        templateUrl: 'modules/spinners/spinners.html',
                        controller: 'spinnersCtrl'
                    }
                }
            })
            .state('app.tabs', {
                url: '/tabs',
                views: {
                    menuContent: {
                        templateUrl: 'modules/tabs/tabs.html',
                        controller: 'tabsCtrl',
                        controllerAs: 'tabs'
                    }
                }
            })
            .state('app.browser', {
                url: '/browser',
                views: {
                    menuContent: {
                        templateUrl: 'modules/browser/browser.html',
                        controller: 'browserCtrl',
                        controllerAs: 'browser'
                    }
                }
            })
            .state('app.geo', {
                url: '/geo',
                views: {
                    menuContent: {
                        templateUrl: 'modules/geo/geo.html',
                        controller: 'geoCtrl',
                        controllerAs: 'geo'
                    }
                }
            })
            .state('app.vibration', {
                url: '/vibration',
                views: {
                    menuContent: {
                        templateUrl: 'modules/vibration/vibration.html',
                        controller: 'vibrationCtrl',
                        controllerAs: 'vibration'
                    }
                }
            })
            .state('app.file', {
                url: '/file',
                views: {
                    menuContent: {
                        templateUrl: 'modules/file/file.html',
                        controller: 'fileCtrl',
                        controllerAs: 'file'
                    }
                }
            })
            .state('app.camera', {
                url: '/camera',
                views: {
                    menuContent: {
                        templateUrl: 'modules/camera/camera.html',
                        controller: 'cameraCtrl',
                        controllerAs: 'camera'
                    }
                }
            })
            .state('app.action', {
                url: '/action',
                views: {
                    menuContent: {
                        templateUrl: 'modules/action/action.html',
                        controller: 'actionCtrl',
                        controllerAs: 'action'
                    }
                }
            })
            .state('app.availability', {
                url: '/availability',
                views: {
                    menuContent: {
                        templateUrl: 'modules/availability/availability.html',
                        controller: 'availabilityCtrl',
                        controllerAs: 'availability'
                    }
                }
            })
            .state('app.barcode', {
                url: '/barcode',
                views: {
                    menuContent: {
                        templateUrl: 'modules/barcode/barcode.html',
                        controller: 'barcodeCtrl',
                        controllerAs: 'barcode'
                    }
                }
            })
            .state('app.date', {
                url: '/date',
                views: {
                    menuContent: {
                        templateUrl: 'modules/date/date.html',
                        controller: 'dateCtrl',
                        controllerAs: 'date'
                    }
                }
            })
            .state('app.toast', {
                url: '/toast',
                views: {
                    menuContent: {
                        templateUrl: 'modules/toast/toast.html',
                        controller: 'toastCtrl',
                        controllerAs: 'toast'
                    }
                }
            })
            .state('app.email', {
                url: '/email',
                views: {
                    menuContent: {
                        templateUrl: 'modules/email/email.html',
                        controller: 'emailCtrl',
                        controllerAs: 'email'
                    }
                }
            })
            .state('app.social', {
                url: '/social',
                views: {
                    menuContent: {
                        templateUrl: 'modules/social/social.html',
                        controller: 'socialCtrl',
                        controllerAs: 'social'
                    }
                }
            })
            .state('app.grid', {
                url: '/grid',
                views: {
                    menuContent: {
                        templateUrl: 'modules/grid/grid.html',
                        controller: 'gridCtrl',
                        controllerAs: 'grid'
                    }
                }
            })
            .state('app.backdrop', {
                url: '/backdrop',
                views: {
                    menuContent: {
                        templateUrl: 'modules/backdrop/backdrop.html',
                        controller: 'backdropCtrl',
                        controllerAs: 'backdrop'
                    }
                }
            })
            .state('app.content', {
                url: '/content',
                views: {
                    menuContent: {
                        templateUrl: 'modules/content/content.html',
                        controller: 'contentCtrl',
                        controllerAs: 'content'
                    }
                }
            })
            .state('app.gestures', {
                url: '/gestures',
                views: {
                    menuContent: {
                        templateUrl: 'modules/gestures/gestures.html',
                        controller: 'gesturesCtrl',
                        controllerAs: 'gestures'
                    }
                }
            })
            .state('app.loading', {
                url: '/loading',
                views: {
                    menuContent: {
                        templateUrl: 'modules/loading/loading.html',
                        controller: 'loadingCtrl',
                        controllerAs: 'loading'
                    }
                }
            })
            .state('app.modal', {
                url: '/modal',
                views: {
                    menuContent: {
                        templateUrl: 'modules/modal/modal.html',
                        controller: 'modalCtrl',
                        controllerAs: 'modal'
                    }
                }
            })
            .state('app.popover', {
                url: '/popover',
                views: {
                    menuContent: {
                        templateUrl: 'modules/popover/popover.html',
                        controller: 'popoverCtrl',
                        controllerAs: 'popover'
                    }
                }
            })
            .state('app.scroll', {
                url: '/scroll',
                views: {
                    menuContent: {
                        templateUrl: 'modules/scroll/scroll.html',
                        controller: 'scrollCtrl',
                        controllerAs: 'scroll'
                    }
                }
            })
            .state('app.keyboard', {
                url: '/keyboard',
                views: {
                    menuContent: {
                        templateUrl: 'modules/keyboard/keyboard.html',
                        controller: 'keyboardCtrl',
                        controllerAs: 'keyboard'
                    }
                }
            });
        $urlRouterProvider.otherwise("/app/slides");
    });
