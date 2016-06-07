(function () {
    'use strict';
    angular.module('starter')
        .factory('Content', Content);
    Content.$inject = ['$q', '$timeout'];

    function Content($q, $timeout) {
        return {
            getItems: getItems
        };

        function getItems() {
            var defer = $q.defer();
            var items = ['Return of the Jedi', 'Attack of the Clones', 'The Empire Strikes Back'];

            $timeout(function () {
                defer.resolve(items);
            }, 2000);

            return defer.promise;
        }
    }
})();