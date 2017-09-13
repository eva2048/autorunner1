define(['angular', 'router'], function() {
    var app = angular.module("myModule", ['ui.router', 'ui.bootstrap','ngAnimate','ui.tree','highcharts-ng','angularResizable','ui.grid','ui.grid.selection','ui.grid.edit','ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize','ui.grid.treeView','meta.umeditor'])
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
            $urlRouterProvider.otherwise('index/1/project');
            $stateProvider
                /*首页模板*/
                .state("index", {
                    url: "/index/:num",
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
                            templateUrl:'../tpls/home/leftnav/projectNav2.html'
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
                               '../js/controller/modal/modalInstanceCtrl.js',
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                /*项目列表*/
                .state("index.project", {
                    url: "/project",
                    views:{
                        'topbar@index':{
                            templateUrl:'../tpls/home/topbarProject.html'
                        },
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavProject.html'
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
                .state("index.project.create", {
                    url: "/create",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/projectlist/projectCreateProject.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                            	 '../js/controller/home/projectlist/projectCreateProjectCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
                .state("index.manual", {
                    url: "/manual",
                    views: {                      
                        'projectBody@index': {
                            templateUrl: '../tpls/home/main/usecase/manual.html'
                        }
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/demand/demandCtrl.js',
                                '../js/controller/home/demand/xheditorController.js',
                                '../js/controller/home/projectNav1.js'

                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })
                /*任务*/
                .state("index.task", {
                    url: "/task",
                    views: {
                        'projectNav@index': {
                            templateUrl: '../tpls/home/leftnav/projectNavTask.html'
                        },
                        'projectBody@index': {
                            templateUrl: '../tpls/home/main/task/task.html'
                        }                       
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                                '../js/controller/home/task/task.js',
                                '../js/controller/home/usecase/usecaseCtrl.js'
                            ], function(controller) {
                                deferred.resolve();
                            });
                            return deferred.promise;
                        }]
                    }
                })
                .state("device", {
                    url: "/device",
                    templateUrl:'../tpls/home/main/deviceInfo/device.html',
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/deviceInfo/device.js',
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
                            templateUrl:'../tpls/home/leftnav/projectNavCase.html'
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavDemand.html'
                        },
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
                /*需求详情-需求内容*/
                .state("index.demand.demandDetails",{
                    url:"/demandDetails",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/demandContent.html'
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
                /*需求详情-用例场景-功能点*/
                .state("index.demand.usecaseScenario",{
                    url:"/useCaseScenario",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/usecaseScenario.html'
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
                /*需求详情-用例场景-测试用例*/
                .state("index.demand.usecaseScenario.usecase",{
                    url:"/usecase",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/usecaseScenarioUsecase.html'
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
                /*需求详情-需求历史*/
                .state("index.demand.usecaseHistory",{
                    url:"/usecaseHistory",
                    views:{
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/demand/usecaseHistory.html'
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavBug.html'
                        },
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavBug.html'
                        },
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
                            templateUrl:'../tpls/home/leftnav/projectNavComponent.html'
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavTestset.html'
                        },
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavStatement.html'
                        },
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
                        'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavStatementChart.html'
                        },
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
                 /*数据池*/
                .state("index.dataPool",{
                    url:"/dataPool",
                    views:{
                    	'projectNav@index':{
                            templateUrl:'../tpls/home/leftnav/projectNavDataPool.html'
                        },
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/dataPool/dataPoolManagement.html'
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
				 .state("index.dataPool.dataCollection",{
                    url:"/dataCollection",
                    views:{                   	
                        'projectBody@index':{
                            templateUrl:'../tpls/home/main/dataPool/dataCollection.html'
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
			//  设备
                .state("equipment", {
                    url: "/equipment/:num",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@equipment':{
                            templateUrl:'../tpls/home/topbar.html'
                        },
                        'main@equipment':{
                            templateUrl:'../tpls/home/main/equipment/equipment.html'
                        }
                       
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/equipment/equipmentCtrl.js',
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
			//后台-用户管理
                .state("userManagement", {
                    url: "/userManagement",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@userManagement':{
                            templateUrl:'../tpls/home/topbarBack-stage.html'
                        },
                        'main@userManagement':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@userManagement':{
                            templateUrl:'../tpls/home/projectNavUserManagement.html'
                        },
                        'projectBody@userManagement':{
                            templateUrl:'../tpls/home/main/back-stageManagement/userManagement.html'
                        }
                        
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([                           
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/back-stageManagement/userManagementCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
//              项目管理
                .state("projectManagement", {
                    url: "/projectManagement",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@projectManagement':{
                            templateUrl:'../tpls/home/topbarBack-stage.html'
                        },
                        'main@projectManagement':{
                            templateUrl:'../tpls/home/main/back-stageManagement/projectManagement.html'
                        }
                                              
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([                           
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/back-stageManagement/projectManagementCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
//              角色组管理
                 .state("roleGroupManagement", {
                    url: "/roleGroupManagement",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@roleGroupManagement':{
                            templateUrl:'../tpls/home/topbarBack-stage.html'
                        },
                        'main@roleGroupManagement':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@roleGroupManagement':{
                            templateUrl:'../tpls/home/leftnav/projectNavRoleGroup.html'
                        },
                        'projectBody@roleGroupManagement':{
                            templateUrl:'../tpls/home/main/back-stageManagement/roleGroupManagement.html'
                        }
                        
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([                           
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',                          
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
//              缺陷流程定制
                .state("defectProcess", {
                    url: "/defectProcess",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@defectProcess':{
                            templateUrl:'../tpls/home/topbarBack-stage.html'
                        },
                        'main@defectProcess':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@defectProcess':{
                            templateUrl:'../tpls/home/leftnav/projectNavDefectProcess.html'
                        },
                        'projectBody@defectProcess':{
                            templateUrl:'../tpls/home/main/back-stageManagement/defectProcess.html'
                        }
                        
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([                           
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/back-stageManagement/defectProcessCtrl.js'
                                ], function(controller) { 
                                    deferred.resolve(); 
                                });
                            return deferred.promise;
                        }]
                    }
                }) 
//              数据字典
                .state("dataDictionary", {
                    url: "/dataDictionary",
                    views:{
                        '':{
                            templateUrl:'../tpls/home/index.html'
                        },
                        'topbar@dataDictionary':{
                            templateUrl:'../tpls/home/topbarBack-stage.html'
                        },
                        'main@dataDictionary':{
                            templateUrl:'../tpls/home/main.html'
                        },
                        'projectNav@dataDictionary':{
                            templateUrl:'../tpls/home/leftnav/projectNavDataDictionary.html'
                        },
                        'projectBody@dataDictionary':{
                            templateUrl:'../tpls/home/main/back-stageManagement/dataDictionary.html'
                        }
                        
                    },
                    resolve: {
                        loadCtrl: ["$q", function($q) {
                            var deferred = $q.defer();
                            //异步加载controller／directive/filter/service
                            require([                           
                               '../js/controller/home/projectCtrl.js',
                               '../js/controller/modal/modalCtrl.js',
                               '../js/controller/modal/modalInstanceCtrl.js',
                               '../js/controller/home/back-stageManagement/dataDictionaryCtrl.js'
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
