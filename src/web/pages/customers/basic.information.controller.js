(function () {
    'use strict';

    var controller = function ($scope, customerService) {
        var viewModel = this,
            active = function (){
                customerService.get().then(function(data){
                    viewModel.name = data.name;
                });
            };

        active();

        $scope.$on('$viewContentLoaded', function () {
            // initialize core components
            Metronic.initAjax();
        });
    };

    App.controller('customerEditBasicInformationController', controller);

})();