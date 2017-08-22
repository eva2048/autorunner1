define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap','ngAnimate','ui.tree','highcharts-ng','angularResizable','time-ng','ui.grid','ui.grid.selection','ui.grid.edit','ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize','ui.grid.treeView'])
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
            $urlRouterProvider.otherwise('index/project');
            $stateProvider
                /*首页用例管理*/
                .state("index", {
                    url: "/index",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@index':{
                            templateUrl:'../tpls/home/topbar.html'
                        },
                        'main@index':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@index':{
                            templateUrl:'../tpls/home/projectNav2.html'
                        },
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/projectlist/projectManage.html'
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
                               '../js/controller/modal/tipmodalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/modal/tipmodalInstanceCtrl.js',
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("index.project", {
                    url: "/project",
                    views:{
                        'projectNav@index':{
                            templateUrl:'../tpls/home/projectNav.html'
                        },
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/projectlist/projectManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/projectlist/projectDetail.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/projectlist/projectListCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*首页用例管理*/
                .state("index.usecase", {
                    url: "/usecase",
                    views:{
                        'projectNav@index':{
                            templateUrl:'../tpls/home/projectNav1.html'
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
                               '../js/controller/home/usecase/usecaseCtrl.js'

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*需求管理*/
                .state("index.demand", {
                    url: "/demand",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/projectDemandManage.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                               '../js/controller/home/demand/demandCtrl.js'

                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*需求详情*/
                .state("index.demand.demandDetails",{
                    url:"/demandDetails",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/projectDemandDetail.html'
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
                /*缺陷管理*/
                .state("index.bug",{
                    url:"/bug",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/bug/projectBugManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/bug/projectBugDetail.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/bug/bugCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                .state("index.createbug",{
                    url:"/createbug",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/bug/projectCreateBug.html'
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
                /*组件管理*/
                .state("index.component",{
                    url:"/component",
                    views:{
                        'projectNav@index':{
                            templateUrl:'../tpls/home/projectNav.html'
                        },
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
                                '../js/controller/home/component/componentCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })
                    
                /*测试集*/
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
                                '../js/controller/home/testset/testSetCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })      
                /*报表*/
                .state("index.statement",{
                    url:"/statement",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/statement/statementManage.html'
                        },
                        'projectDetail@index':{
                            templateUrl:'../tpls/home/main/statement/statementDetail.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/statement/statementCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                })  
                /*报表详情*/
                .state("index.statement.statementDetail",{
                    url:"/statementDetail",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/statement/statementManageDetail.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/statement/statementCtrl.js'
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
