(function () {
    'use strict';

    var service = function ($http, $q) {
        var uri = 'http://localhost:3001/customers',

            getAll = function (page, size) {
                var deferred = $q.defer();

                $http({
                    url: uri + '?page=' + page + '&size=' + size,
                    method: 'GET'
                }).then(function (response) {
                    deferred.resolve(response.data);
                });

                return deferred.promise;
            },
            get = function (id) {
                var deferred = $q.defer();

                $http({
                    url: uri + '/' + id,
                    method: 'GET'
                }).then(function (response) {
                    deferred.resolve(response.data);
                }).catch(function (response){
                    console.log(response);
                });

                return deferred.promise;
            };

        return {
            getAll: getAll,
            get: get
        };
    };

    App.factory('customerService', service);
})();