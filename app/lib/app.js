define(['angular', 'router'], function() {
	var app = angular.module("myModule", ['ui.router', 'ui.bootstrap', 'ngAnimate', 'ui.tree', 'highcharts-ng', 'angularResizable', 'ui.grid', 'ui.grid.selection', 'ui.grid.edit', 'ui.grid.exporter', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.autoResize', 'ui.grid.treeView', 'meta.umeditor'])
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
		.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', function($stateProvider, $urlRouterProvider, $controllerProvider) {
			$urlRouterProvider.otherwise('index/1/project');
			$stateProvider
				/*首页模板*/
				.state("index", {
					url: "/index/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@index': {
							templateUrl: '../tpls/home/topbar.html'
						},
						'main@index': {
							templateUrl: '../tpls/home/main.html'
						},
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNav2.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/projectlist/projectManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/usecase/projectUsecaseDetail.html'
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
					views: {
						'topbar@index': {
							templateUrl: '../tpls/home/topbarProject.html'
						},
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavProject.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/projectlist/projectManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/projectlist/projectDetail.html'
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
				//跨项目任务
				.state("index.cross-projectTask", {
					url: "/cross-projectTask",
					views: {
						'topbar@index': {
							templateUrl: '../tpls/home/topbarProject.html'
						},
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavProject.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/Cross-projectTask/Cross-projectTask.html'
						}

					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/Cross-projectTask/Cross-projectTask.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*报表详情*/
				.state("chartDetail", {
					url: "/chartDetail",
					views: {
						'': {
							templateUrl: '../tpls/home/index1.html'
						},
						'main@chartDetail': {
							templateUrl: '../tpls/home/main/chart/chartDetail.html'
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
								'../js/controller/home/statement/statementCtrl.js'
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
					templateUrl: '../tpls/home/main/deviceInfo/device.html',
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
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavCase.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/usecase/projectUsecaseManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/usecase/projectUsecaseDetail.html'
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
				/*需求管理2*/
				.state("index.demand2", {
					url: "/demand2",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavDemand2.html'
						},
						'projectBody@index': {						
							templateUrl: '../tpls/home/main/demand2/demandContent.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/modal/addActivityCtrl.js',
								'../js/controller/home/demand2/demandCtrl.js',
								'../js/controller/home/demand2/projectNavDemandCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})	
				/*需求管理2*/
				.state("index.demand", {
					url: "/demand",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavDemand2.html'
						},
						'projectBody@index': {							
							templateUrl: '../tpls/home/main/demand2/demand.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([								
								'../js/controller/home/demand2/demandCtrl.js',
								'../js/controller/home/demand2/projectNavDemandCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})				
				/*需求详情-需求内容2*/
				.state("index.demand2.demandDetails", {
					url: "/demandDetails2",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavDemand1.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/projectDemandManage.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/modal/addActivityCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})				
				/*需求详情-用例场景-功能点2*/
				.state("index.demand2.usecaseScenario", {
					url: "/useCaseScenario2",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/usecaseScenario.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/modal/createFuncPointsCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})				
				/*需求详情-用例场景-规则场景*/
				.state("index.demand2.ruleScene", {
					url: "/ruleScene",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/ruleScene.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})				
				/*需求详情-用例场景-规则场景-参数传递*/
				.state("index.demand2.parameterPassing", {
					url: "/parameterPassing",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/parameterPassing.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/demand2/parameterPassingCtrl.js',
								'../js/controller/modal/addCaseCtrl.js'
							], function(controller) {								
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})	
				//组件配置
				.state("index.demand2.componentConfigurator", {
					url: "/componentConfigurator",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/componentConfigurator.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*需求详情-需求历史2*/
				.state("index.demand2.usecaseHistory", {
					url: "/usecaseHistory2",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/demand2/usecaseHistory.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*查看需求详情*/
//				.state("demandDetail", {
//					url: "/demandDetail",
//					views: {
//						'': {
//							templateUrl: '../tpls/home/index1.html'
//						},
//						'main@demandDetail': {
//							templateUrl: '../tpls/home/main1.html'
//						},
//						'projectBody@demandDetail': {
//							templateUrl: '../tpls/home/main/demand2/demandContent.html'
//						}
//					},
//					resolve: {
//						loadCtrl: ["$q", function($q) {
//							var deferred = $q.defer();
//							//异步加载controller／directive/filter/service
//							require([
//								'../js/controller/home/projectCtrl.js',
//								'../js/controller/modal/modalCtrl.js',
//								'../js/controller/modal/tipmodalCtrl.js',
//								'../js/controller/modal/modalInstanceCtrl.js',
//								'../js/controller/modal/tipmodalInstanceCtrl.js',
//								'../js/controller/modal/addActivityCtrl.js',
//								'../js/controller/home/demand2/demandCtrl.js',
//								'../js/controller/home/demand2/projectNavDemandCtrl.js'
//							], function(controller) {
//								deferred.resolve();
//							});
//							return deferred.promise;
//						}]
//					}
//				})
				/*缺陷管理*/
				.state("index.bug", {
					url: "/bug",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavBug.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/bug/projectBugManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/bug/projectBugDetail.html'
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
				.state("index.createbug", {
					url: "/createbug",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavBug.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/bug/projectCreateBug.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*组件管理*/
				.state("index.component", {
					url: "/component",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavComponent.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/component/componentManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/component/componentDetail.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/component/componentCtrl.js',
								'../js/controller/home/component/componentDetailCtrl.js',
								'../js/controller/home/component/projectNavComponentCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})

				/*测试集*/
				.state("index.testset", {
					url: "/testset",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavTestset.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/testset/testsetManage.html'
						},
						'projectDetail@index': {
							templateUrl: '../tpls/home/main/testset/testsetDetail.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/testset/testSetCtrl.js',
								'../js/controller/home/testset/projectNavTestsetCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*执行记录*/
				.state("statement", {
					url: "/statement/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@statement': {
							templateUrl: '../tpls/home/topbar.html'
						},
						'main@statement': {
							templateUrl: '../tpls/home/main1.html'
						},
						'projectBody@statement': {
							templateUrl: '../tpls/home/main/statement/statementManage.html'
						},
						'projectDetail@statement': {
							templateUrl: '../tpls/home/main/statement/statementDetail.html'
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
								'../js/controller/home/statement/statementCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*报表详情*/
				.state("statementDetail", {
					url: "/statementDetail",
					views: {
						'': {
							templateUrl: '../tpls/home/index1.html'
						},
						'main@statementDetail': {
							templateUrl: '../tpls/home/main1.html'
						},
						'projectBody@statementDetail': {
							templateUrl: '../tpls/home/main/statement/statementDetail.html'
						},
						'projectDetail@statementDetail': {
							templateUrl: '../tpls/home/main/statement/statementDetailDetail.html'
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
								'../js/controller/home/statement/statementCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*预约记录*/
				.state("reservationRecord", {
					url: "/reservationRecord/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@reservationRecord': {
							templateUrl: '../tpls/home/topbar.html'
						},
						'main@reservationRecord': {
							templateUrl: '../tpls/home/main1.html'
						},
						'projectBody@reservationRecord': {
							templateUrl: '../tpls/home/main/reservationRecord/reservationRecord.html'
						},
						'projectDetail@reservationRecord': {
							templateUrl: '../tpls/home/main/reservationRecord/reservationDetail.html'
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
								'../js/controller/home/reservationRecord/reservationRecord.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				/*数据池*/
				.state("index.dataPool", {
					url: "/dataPool",
					views: {
						'projectNav@index': {
							templateUrl: '../tpls/home/leftnav/projectNavDataPool.html'
						},
						'projectBody@index': {
							templateUrl: '../tpls/home/main/dataPool/dataPoolManagement.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/datapool/datapoolCtrl.js',
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				.state("index.dataPool.dataCollection", {
					url: "/dataCollection",
					views: {
						'projectBody@index': {
							templateUrl: '../tpls/home/main/dataPool/dataCollection.html'
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
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@equipment': {
							templateUrl: '../tpls/home/topbarProject.html'
						},
						'main@equipment': {
							templateUrl: '../tpls/home/main/equipment/equipment.html'
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
					url: "/userManagement/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@userManagement': {
							templateUrl: '../tpls/home/topbarBack-stage.html'
						},
						'main@userManagement': {
							templateUrl: '../tpls/home/main.html'
						},
						'projectNav@userManagement': {
							templateUrl: '../tpls/home/leftnav/projectNavUserManagement.html'
						},
						'projectBody@userManagement': {
							templateUrl: '../tpls/home/main/back-stageManagement/userManagement.html'
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
					url: "/projectManagement/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@projectManagement': {
							templateUrl: '../tpls/home/topbarBack-stage.html'
						},
						'main@projectManagement': {
							templateUrl: '../tpls/home/main/back-stageManagement/projectManagement.html'
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
				.state("projectManagement.create", {
					url: "/create/:num",
					views: {
						'main@projectManagement': {
							templateUrl: '../tpls/home/main/projectlist/projectCreateProject.html'
						}
					},
					resolve: {
						loadCtrl: ["$q", function($q) {
							var deferred = $q.defer();
							//异步加载controller／directive/filter/service
							require([
								'../js/controller/home/projectlist/projectCreateProjectCtrl.js',
								'../js/controller/modal/customAttributesCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				//              角色组管理
				.state("roleGroupManagement", {
					url: "/roleGroupManagement/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@roleGroupManagement': {
							templateUrl: '../tpls/home/topbarBack-stage.html'
						},
						'main@roleGroupManagement': {
							templateUrl: '../tpls/home/main.html'
						},
						'projectNav@roleGroupManagement': {
							templateUrl: '../tpls/home/leftnav/projectNavRoleGroup.html'
						},
						'projectBody@roleGroupManagement': {
							templateUrl: '../tpls/home/main/back-stageManagement/roleGroupManagement.html'
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
								'../js/controller/home/back-stageManagement/roleGroupManagementCtrl.js'
							], function(controller) {
								deferred.resolve();
							});
							return deferred.promise;
						}]
					}
				})
				//              缺陷流程定制
				.state("defectProcess", {
					url: "/defectProcess/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@defectProcess': {
							templateUrl: '../tpls/home/topbarBack-stage.html'
						},
						'main@defectProcess': {
							templateUrl: '../tpls/home/main.html'
						},
						'projectNav@defectProcess': {
							templateUrl: '../tpls/home/leftnav/projectNavDefectProcess.html'
						},
						'projectBody@defectProcess': {
							templateUrl: '../tpls/home/main/back-stageManagement/defectProcess.html'
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
					url: "/dataDictionary/:num",
					views: {
						'': {
							templateUrl: '../tpls/home/index.html'
						},
						'topbar@dataDictionary': {
							templateUrl: '../tpls/home/topbarBack-stage.html'
						},
						'main@dataDictionary': {
							templateUrl: '../tpls/home/main.html'
						},
						'projectNav@dataDictionary': {
							templateUrl: '../tpls/home/leftnav/projectNavDataDictionary.html'
						},
						'projectBody@dataDictionary': {
							templateUrl: '../tpls/home/main/back-stageManagement/dataDictionary.html'
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