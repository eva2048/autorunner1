define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap','ngAnimate'])
    app.config(function($controllerProvider, $compileProvider, $filterProvider, $provide) {
            app.register = {
                //得到$controllerProvider的引用
                controller: $controllerProvider.register,
                //同样的，这里也可以保存directive／filter／service的引用
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                service: $provide.service
            };
        })
        .config(['$stateProvider', '$urlRouterProvider','$controllerProvider', function($stateProvider, $urlRouterProvider,$controllerProvider) {
            $urlRouterProvider.otherwise('index');
            $stateProvider
                .state("index", {
                    url: "/index",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'main@index':{
                            templateUrl:'../tpls/home/index.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/home/indexCtrl.js',
                                'js/controller/modal/modalCtrl.js',
                                'js/controller/modal/modalInstanceCtrl.js'                               
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("index.product",{
                    url:"/product",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/product.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("index.shopcart",{
                    url:"/shopcart",
                    views:{
                        'main@index':{
                            templateUrl:'../tpls/home/shopcart.html'
                        }
                    }, 
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                .state("console",{
                    url:"/console",
                    views:{
                        '':{
                            templateUrl:'../tpls/admin/index.html'
                        },
                        'main@console':{
                            templateUrl:'../tpls/admin/main_myorder.html'
                        },
                        'leftnav@console':{
                            templateUrl:'../tpls/admin/nav_expense.html'
                        }
                    },                  
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/myorderCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                .state("console.contract",{
                    url:"/contract",
                    views:{
                        'main@console':{
                            templateUrl:'../tpls/admin/main_mycontract.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/myorderCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("console.flow",{
                    url:"/flow",
                    views:{
                        'leftnav@console':{
                            templateUrl:'../tpls/admin/nav_flow.html'
                        },
                        'main@console':{
                            templateUrl:'../tpls/admin/main_projectgroup.html'
                        }
                    },      
                    resolve:{
                        loadCtrl:["$q",function($q){
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/myorderCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })  
                .state("console.cnas", {
                    url: "/cnas",
                    views: {
                        'leftnav@console': {
                            templateUrl: '../tpls/admin/nav_flow.html'
                        },
                        'main@console': {
                            templateUrl: '../tpls/admin/main_cnas.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/cnasListCtrl.js',
                                'js/controller/modal/modalCtrl.js',
                                'js/controller/modal/modalInstanceCtrl.js'

                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })
                .state("console.launched", {
                    url: "/launched",
                    views: {
                        'leftnav@console': {
                            templateUrl: '../tpls/admin/nav_flow.html'
                        },
                        'main@console': {
                            templateUrl: '../tpls/admin/main_launched.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/launchedCtrl.js'
                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })
                .state("console.processed", {
                    url: "/processed",
                    views: {
                        'leftnav@console': {
                            templateUrl: '../tpls/admin/nav_flow.html'
                        },
                        'main@console': {
                            templateUrl: '../tpls/admin/main_processed.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/processedCtrl.js'
                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })
                .state("console.pending", {
                    url: "/pending",
                    views: {
                        'leftnav@console': {
                            templateUrl: '../tpls/admin/nav_flow.html'
                        },
                        'main@console': {
                            templateUrl: '../tpls/admin/main_pending.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                'js/controller/admin/pendingCtrl.js'
                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })                          
        }])
    return app;
})
