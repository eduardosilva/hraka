/* Setup Rounting For All Pages */
MetronicApp.config(['$stateProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
                // UI Bootstrap
                .state('uibootstrap', {
                    url: "/ui_bootstrap.html",
                    templateUrl: "views/ui_bootstrap.html",
                    data: {pageTitle: 'AngularJS UI Bootstrap', pageSubTitle: 'bootstrap components written in angularjs'},
                    controller: "GeneralPageController",
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([{
                                name: 'MetronicApp',
                                files: [
                                    'js/controllers/GeneralPageController.js'
                                ] 
                            }]);
                        }] 
                    }
                })

            // AngularJS plugins
            .state('fileupload', {
                url: "/file_upload.html",
                templateUrl: "views/file_upload.html",
                data: {pageTitle: 'AngularJS File Upload', pageSubTitle: 'angularjs file upload'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'angularFileUpload',
                            files: [
                                '../../../assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                            ] 
                        }, {
                            name: 'MetronicApp',
                            files: [
                                'js/controllers/GeneralPageController.js'
                            ]
                        }]);
                    }]
                }
            })

            // UI Select
            .state('uiselect', {
                url: "/ui_select.html",
                templateUrl: "views/ui_select.html",
                data: {pageTitle: 'AngularJS Ui Select', pageSubTitle: 'select2 written in angularjs'},
                controller: "UISelectController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'ui.select',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                                '../../../assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                            ] 
                        }, {
                            name: 'MetronicApp',
                            files: [
                                'js/controllers/UISelectController.js'
                            ] 
                        }]);
                    }]
                }
            })

}]);