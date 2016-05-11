(function () {
    'use strict';
    angular.module('starter')
        .controller('cardsCtrl', cardsCtrl);
    cardsCtrl.$inject = ['$scope'];

    function cardsCtrl($scope) {
        var vm = this;
        vm.cardDestroyed = cardDestroyed;
        vm.cardSwipedRight = cardSwipedRight;
        vm.cardSwipedLeft = cardSwipedLeft;
        var cards = [
            {
                content: "Some content"
            },
            {
                content: "Content stuff"
            }
        ];

        vm.cards = Array.prototype.slice.call(cards, 0);

        function cardDestroyed(index) {
            vm.cards.active.splice(index, 1);
        }

        $scope.$on('removeCard', function (event, element, card) {
            var discarded = vm.cards.master.splice(vm.cards.master.indexOf(card), 1);
            vm.cards.discards.push(discarded);
        });

        function cardSwipedLeft(index) {
            var card = vm.cards.active[index];
            vm.cards.disliked.push(card);
        }

        function cardSwipedRight(index) {
            var card = vm.cards.active[index];
            vm.cards.liked.push(card);
        }
    }
})();

