define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap','ngAnimate','ui.tree'])
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
                /*首页*/
                .state("index", {
                    url: "/index",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'main@index':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@index':{
                            templateUrl:'../tpls/home/projectNav.html'
                        },
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/usecase/projectUsecaseManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/usecase/projectUsecaseDetail.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("index.component",{
                    url:"/component",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/component/componentManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/component/componentDetail.html'
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
                .state("index.demandDetails",{
                    url:"/demandDetails",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/usecase/projectUsecaseDetail.html'
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
                .state("index.testset",{
                    url:"/testset",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/testset/testsetManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/testset/testsetDetail.html'
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
        }])
    return app;
})
