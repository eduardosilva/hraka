/* Setup Rounting For All Pages */
App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
        // Redirect any unmatched url
        $urlRouterProvider.otherwise("/dashboard.html");
    
        $stateProvider
    
            // Dashboard
            .state('dashboard', {
                url: "/dashboard.html",
                templateUrl: "views/dashboard.html",            
                data: {pageTitle: 'Dashboard', pageSubTitle: 'statistics & reports'},
                controller: "DashboardController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'App',
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/morris/morris.css',
                                '../../../assets/admin/pages/css/tasks.css',
                                
                                '../../../assets/global/plugins/morris/morris.min.js',
                                '../../../assets/global/plugins/morris/raphael-min.js',
                                '../../../assets/global/plugins/jquery.sparkline.min.js',
    
                                '../../../assets/admin/pages/scripts/index3.js',
                                '../../../assets/admin/pages/scripts/tasks.js',
    
                                 'js/controllers/DashboardController.js'
                            ] 
                        });
                    }]
                }
            })
    
            // User Profile
            .state("profile", {
                url: "/profile",
                templateUrl: "views/profile/main.html",
                data: {pageTitle: 'User Profile', pageSubTitle: 'user profile sample'},
                controller: "UserProfileController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'App',  
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                                '../../../assets/admin/pages/css/profile.css',
                                '../../../assets/admin/pages/css/tasks.css',
                                
                                '../../../assets/global/plugins/jquery.sparkline.min.js',
                                '../../../assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
    
                                '../../../assets/admin/pages/scripts/profile.js',
    
                                'js/controllers/UserProfileController.js'
                            ]                    
                        });
                    }]
                }
            })
    
            // User Profile Dashboard
            .state("profile.dashboard", {
                url: "/dashboard",
                templateUrl: "views/profile/dashboard.html",
                data: {pageTitle: 'User Profile', pageSubTitle: 'user profile dashboard sample'}
            })
    
            // User Profile Account
            .state("profile.account", {
                url: "/account",
                templateUrl: "views/profile/account.html",
                data: {pageTitle: 'User Account', pageSubTitle: 'user profile account sample'}
            })
    
            // User Profile Help
            .state("profile.help", {
                url: "/help",
                templateUrl: "views/profile/help.html",
                data: {pageTitle: 'User Help', pageSubTitle: 'user profile help sample'}      
            })
    
            // Todo
            .state('todo', {
                url: "/todo",
                templateUrl: "views/todo.html",
                data: {pageTitle: 'Todo', pageSubTitle: 'user todo & tasks sample'},
                controller: "TodoController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({ 
                            name: 'App',  
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                                '../../../assets/global/plugins/select2/select2.css',
                                '../../../assets/admin/pages/css/todo.css',
                                
                                '../../../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                '../../../assets/global/plugins/select2/select2.min.js',
    
                                '../../../assets/admin/pages/scripts/todo.js',
    
                                'js/controllers/TodoController.js'  
                            ]                    
                        });
                    }]
                }
            })
                        //Customer
            .state('customers', {
                url: "/customers",
                templateUrl: "pages/customers/list/list.html",
                data: { pageTitle: 'Clientes', pageSubTitle: 'cadastros de clientes' },
                controller: "customerListController",
                controllerAs: 'viewModel',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({ 
                            name: 'App',  
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [

                                'directives/pagination/pagination.js',
                                'pages/customers/list/list.controller.js',
                                'pages/customers/service.js'
                            ]                    
                        });
                    }]
                }
            })  
            .state('customers.edit', {
                url: "/customers",
                templateUrl: "pages/customers/edit/main.html",
                data: { pageTitle: 'Clientes', pageSubTitle: 'cadastros de clientes' },
                controller: "customerEditController",
                controllerAs: 'viewModel',
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({ 
                            name: 'App',  
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: [
                                '../../../assets/global/plugins/bootstrap-datepicker/css/datepicker3.css',
                                '../../../assets/global/plugins/select2/select2.css',
                                
                                '../../../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js',
                                '../../../assets/global/plugins/select2/select2.min.js',

                                'directives/sidebar/sidebar.js',
                                'pages/customers/edit/main.controller.js',
                                'pages/customers/service.js'
                            ]                    
                        });
                    }]
                }
            })       
            .state("customers.editBasicInformation", {
                url: "/edit",
                templateUrl: "pages/customers/basic.Information.html",
                controller: "customerEditBasicInformationController",
                controllerAs: 'viewModel',
                data: { pageTitle: 'Clientes', pageSubTitle: 'Informações detalhada do cliente' },
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({ 
                            name: 'App',  
                            insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                            files: 
                            [
                                'pages/customers/basic.information.controller.js',
                                'pages/customers/service.js'
                            ]                    
                        });
                    }]
                }
            })
    
}]);