(function () {
    'use strict';

    var directive = function ($state) {
        return {
            restrict: 'E',
            controller: ['$scope', '$state', function ($scope, $state) {
                var any = function (arr) {
                    return arr && arr.length > 0;
                },
                    max = function (arr) {
                        var result = arr[0];
                        for (let index = 0; index < arr.length; index++) {
                            const element = arr[index];
                            if (element > result)
                                result = element;
                        }

                        return result;
                    },
                    calcPages = function () {
                        var firstPage = 1,
                            minValue = firstPage,
                            maxValue = firstPage;

                        if ($scope.totalItems > 0) {

                            if ($scope.currentPage - 2 > firstPage)
                            {
                                minValue = $scope.currentPage - 2;

                                if (minValue >= $scope.totalPages - 4)
                                    minValue = $scope.totalPages - 4;
                            }

                            if ($scope.currentPage + 2 > $scope.totalPages)
                                maxValue = $scope.totalPages;
                            else {
                                maxValue = minValue + 4
                            }
                        }

                        $scope.pages = [];
                        for (let index = minValue; index <= maxValue; index++) {
                            $scope.pages.push(index);
                        }

                        $scope.showingFrom = ($scope.currentPage * $scope.itemsPerPage) - $scope.itemsPerPage + 1;
                        $scope.showingTo = $scope.currentPage * $scope.itemsPerPage;
                    };

                if (!$scope.itemsPerPage)
                    $scope.itemsPerPage = 10;

                $scope.pages = [];
                $scope.currentPage = 1;
                $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
                $scope.showingFrom = 1;
                $scope.showingTo = 2;

                if (!($scope.totalPages > 0))
                    $scope.totalPages = 1;

                $scope.isActive = function (url) {
                    return $state.includes(url);
                };

                $scope.moveTo = function (page) {
                    $scope.currentPage = page;
                    calcPages();
                };

                calcPages();

            }],
            scope: {
                totalItems: '=totalItems',
                itemsPerPage: '@itemsPerPage'
            },
            templateUrl: '/directives/pagination/pagination.html'
        };
    };

    App.directive('appPagination', directive);
})()