(function () {
    'use strict';

    var directive = function ($state) {
        return {
            restrict: 'E',
            controller: ['$scope', '$state', function ($scope, $state) {
                var calcPages = function () {
                    var firstPage = 1,
                        minValue = firstPage,
                        maxValue = firstPage;

                    minValue = Math.max(firstPage, $scope.ngModel - 2);
                    maxValue = Math.min($scope.totalPages, minValue + 4);

                    $scope.pages = [];
                    for (let index = minValue; index <= maxValue; index++) {
                        $scope.pages.push(index);
                    }
                };

                
                if (!$scope.itemsPerPage)
                    $scope.itemsPerPage = 10;

                if (!$scope.ngModel)
                    $scope.ngModel = 1;

                $scope.pages = [];
                $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
                $scope.showingFrom = function () {
                    return ($scope.ngModel * $scope.itemsPerPage) - $scope.itemsPerPage + 1
                };
                $scope.showingTo = function () {
                    return $scope.ngModel * $scope.itemsPerPage;
                };

                if (!($scope.totalPages > 0))
                    $scope.totalPages = 1;

                $scope.isActive = function (url) {
                    return $state.includes(url);
                };

                $scope.moveTo = function (page) {
                    $scope.ngModel = page;
                    calcPages();
                };

                calcPages();

            }],
            scope: {
                totalItems: '=totalItems',
                itemsPerPage: '@itemsPerPage',
                ngModel: '='
            },
            templateUrl: '/directives/pagination/pagination.html'
        };
    };

    App.directive('appPagination', directive);
})()