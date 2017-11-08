(function () {
    'use strict';

    var service = function ($http, $q) {
        var get = function (){
            var response = {
                name: "Eduardo Alexandre Lourenço da Silva"
            };

            var deferred = $q.defer();
            deferred.resolve(response);

            return deferred.promise;
        };


        return {
            get: get
        };
    };

    MetronicApp.factory('customerService', service);
})();