(function () {
    'use strict';

    var controller = function ($scope, $state, customerService) {
        var viewModel = this,
            getCustomers = function () {
                customerService.getAll(viewModel.currentPage, 10).then(function (data) {
                    viewModel.list = data;
                });
            },
            active = function () {
                getCustomers();
            };

        viewModel.currentPage = 1;

        $scope.$watch('viewModel.currentPage', function (newValue, oldValue) {
            getCustomers();
        });

        active();


        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            Metronic.initAjax();
        });
    };

    App.controller('customerListController', controller);

})();

