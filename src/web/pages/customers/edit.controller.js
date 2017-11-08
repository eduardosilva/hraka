(function () {
    'use strict';

    var customerEditController = function ($scope, customerService) {
        var viewModel = this,
            active = function (){
                customerService.get().then(function(data){
                    debugger;
                    viewModel.name = data.name;
                });
            };

        active();

        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            Metronic.initAjax();
        });
    };

    MetronicApp.controller('customerEditController', customerEditController);

})();

