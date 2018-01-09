(function () {
    'use strict';

    var controller = function ($scope, $state, customerService) {

        var viewModel = this,
            active = function (){
                customerService.get($state.params.id).then(function(data){
                    viewModel.name = data.name;
                    console.log(data);
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