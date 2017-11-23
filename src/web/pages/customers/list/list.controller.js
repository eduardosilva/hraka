(function () {
    'use strict';

    var controller = function ($scope, $state) {
        var viewModel = this,
            active = function (){

            };

        active();


        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            Metronic.initAjax();
        });
    };

    App.controller('customerListController', controller);

})();

