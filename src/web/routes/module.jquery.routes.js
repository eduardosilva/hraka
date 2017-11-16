/* Setup Rounting For All Pages */
App.config(['$stateProvider', function($stateProvider, $urlRouterProvider) {
    
    $stateProvider

            // Form Tools
            .state('formtools', {
                url: "/form-tools",
                templateUrl: "views/form_tools.html",
                data: {pageTitle: 'Form Tools', pageSubTitle: 'form components & widgets sample'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                                '../../../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                                '../../../assets/global/plugins/jquery-tags-input/jquery.tagsinput.css',
                                '../../../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                                '../../../assets/global/plugins/typeahead/typeahead.css',

                                '../../../assets/global/plugins/fuelux/js/spinner.min.js',
                                '../../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                                '../../../assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                                '../../../assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                                '../../../assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                                '../../../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                                '../../../assets/global/plugins/jquery-tags-input/jquery.tagsinput.min.js',
                                '../../../assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                                '../../../assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                                '../../../assets/global/plugins/typeahead/handlebars.min.js',
                                '../../../assets/global/plugins/typeahead/typeahead.bundle.min.js',
                                '../../../assets/admin/pages/scripts/components-form-tools.js',

                                'js/controllers/GeneralPageController.js'
                            ] 
                        }]);
                    }] 
                }
            })    

            // Date & Time Pickers
            .state('pickers', {
                url: "/pickers",
                templateUrl: "views/pickers.html",
                data: {pageTitle: 'Date & Time Pickers', pageSubTitle: 'date, time, color, daterange pickers'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/clockface/css/clockface.css',
                                '../../../assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                                '../../../assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                                '../../../assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                                '../../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css',
                                '../../../assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
    
                                '../../../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                '../../../assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                                '../../../assets/global/plugins/clockface/js/clockface.js',
                                '../../../assets/global/plugins/bootstrap-daterangepicker/moment.min.js',
                                '../../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.js',
                                '../../../assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                                '../../../assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
    
                                '../../../assets/admin/pages/scripts/components-pickers.js',
    
                                'js/controllers/GeneralPageController.js'
                            ] 
                        }]);
                    }] 
                }
            })

            // Custom Dropdowns
            .state('dropdowns', {
                url: "/dropdowns",
                templateUrl: "views/dropdowns.html",
                data: {pageTitle: 'Custom Dropdowns', pageSubTitle: 'select2 & bootstrap select dropdowns'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/bootstrap-select/bootstrap-select.min.css',
                                '../../../assets/global/plugins/select2/select2.css',
                                '../../../assets/global/plugins/jquery-multi-select/css/multi-select.css',
    
                                '../../../assets/global/plugins/bootstrap-select/bootstrap-select.min.js',
                                '../../../assets/global/plugins/select2/select2.min.js',
                                '../../../assets/global/plugins/jquery-multi-select/js/jquery.multi-select.js',
    
                                '../../../assets/admin/pages/scripts/components-dropdowns.js',
    
                                'js/controllers/GeneralPageController.js'
                            ] 
                        }]);
                    }] 
                }
            }) 

            // Tree View
            .state('tree', {
                url: "/tree",
                templateUrl: "views/tree.html",
                data: {pageTitle: 'jQuery Tree View', pageSubTitle: 'tree view samples'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([{
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/jstree/dist/themes/default/style.min.css',
    
                                '../../../assets/global/plugins/jstree/dist/jstree.min.js',
                                '../../../assets/admin/pages/scripts/ui-tree.js',
                                'js/controllers/GeneralPageController.js'
                            ] 
                        }]);
                    }] 
                }
            }) 

            // Advanced Datatables
            .state('datatablesAdvanced', {
                url: "/datatables/advanced.html",
                templateUrl: "views/datatables/advanced.html",
                data: {pageTitle: 'Advanced Datatables', pageSubTitle: 'advanced datatables samples'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/select2/select2.css',                             
                                '../../../assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css', 
                                '../../../assets/global/plugins/datatables/extensions/Scroller/css/dataTables.scroller.min.css',
                                '../../../assets/global/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.min.css',
    
                                '../../../assets/global/plugins/select2/select2.min.js',
                                '../../../assets/global/plugins/datatables/all.min.js',
                                'js/scripts/table-advanced.js',
    
                                'js/controllers/GeneralPageController.js'
                            ]
                        });
                    }]
                }
            })
    
            // Ajax Datetables
            .state('datatablesAjax', {
                url: "/datatables/ajax.html",
                templateUrl: "views/datatables/ajax.html",
                data: {pageTitle: 'Ajax Datatables', pageSubTitle: 'ajax datatables samples'},
                controller: "GeneralPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/select2/select2.css',                             
                                '../../../assets/global/plugins/bootstrap-datepicker/css/datepicker.css',
                                '../../../assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css',
    
                                '../../../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                '../../../assets/global/plugins/select2/select2.min.js',
                                '../../../assets/global/plugins/datatables/all.min.js',
    
                                '../../../assets/global/scripts/datatable.js',
                                'js/scripts/table-ajax.js',
    
                                'js/controllers/GeneralPageController.js'
                            ]
                        });
                    }]
                }
            })

}]);