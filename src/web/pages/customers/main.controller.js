(function () {
    'use strict';

    var controller = function ($scope) {
        var viewModel = this,
            active = function (){

            };

        active();

        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            Metronic.initAjax();
        });
    };

    App.controller('customerEditController', controller);

})();

