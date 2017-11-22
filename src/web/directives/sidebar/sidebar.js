(function () {
    'use strict';

    var directive = function ($state) {
        return {
            restrict: 'E',
            controller: ['$scope', '$state', function ($scope, $state) {
                $scope.isActive = function (url) {
                    return $state.includes(url);
                };
            }],
            scope: {
                items: '=items'
            },
            templateUrl: '/directives/sidebar/sidebar.html'
        };
    };

    App.directive('sidebar', directive);
})()