define(['app'], function(app) {
	app.register
		.controller('projectListCtrl',
			function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
				//项目详情
				//项目模块
				$scope.pModel = ['123', '222'];
				$scope.sModelDel = function(val) {
					$scope.pModel.splice(val, 1);
				};

				function arrindex(arr, obj) { //判断是否重复  
					var i = arr.length;
					while(i--) {
						if(arr[i] === obj) {
							return true;
						}
					}
					return false;
				};
				$scope.addModel = function(e) {
					var keycode = window.event ? e.keyCode : e.which;
					if(keycode == 13) {
						if(!arrindex($scope.pModel, $scope.modelItem)) {
							$scope.pModel.push($scope.modelItem);
							$scope.modelItem = '';
						} else {
							$scope.modelItem = '';
						}
					}
				};
				$scope.projectmember = [{
						"role": "管理者",
						"members": [

						]
					},
					{
						"role": "项目经理",
						"members": [{
								"name": 'humq项目经理项目经理项目经理项目经理'
							},
							{
								"name": 'wumx'
							}
						]
					}
				];
				$scope.projectAttribute = [{
						"role": "缺陷属性",
						"members": [

						]
					},
					{
						"role": "用例属性",
						"members": [{
								"name": 'humq属性一属性',
								"showType": 'TextInput',
								"show": true
							},
							{
								"name": 'wumx',
								"showType": 'comoBox',
								"show": false
							},
							{
								"name": 'aaaaaaa',
								"showType": 'Date',
								"show": true
							}
						]
					}
				];
				//展开子级
				$scope.openTableList = function($event) {
					var openTableListOl = $($event.target).parents(".openTableListTitle").siblings(".openTableListOl");
					if(openTableListOl.is(":hidden")) {
						openTableListOl.show();
						$($event.target).addClass("icon-shouqi");
					} else {
						openTableListOl.hide();
						$($event.target).removeClass("icon-shouqi");
					}
				}
				//表格初始化
				$http.get('./data/project.php')
					.success(function(data) {
						$scope.gridOptionsProject.data = data.lists;
					});
				//表格初始化
				i18nService.setCurrentLang("zh-cn");
				$scope.gridOptionsProject = {
					enableRowSelection: true,
					enableSelectAll: true,
					selectionRowHeaderWidth: 40,
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: "projectCode",
							displayName: '项目代码',
							enableColumnMenu: false, // 是否显示列头部菜单按钮	
						},
						{
							field: "projectName",
							displayName: '项目名称',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮                            
							cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.projectName}}</div>',

						},
						{
							field: "projectManager",
							displayName: '项目经理',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "projectState",
							displayName: '项目状态',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "startTime",
							displayName: '开始时间',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "endTime",
							displayName: '结束时间',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "executoryTask",
							displayName: '待执行任务',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "executoryBug",
							displayName: '待处理缺陷',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "action",
							displayName: '操作处理',
							cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ui-sref="index.component({num:1})")">进入项目</a></div>',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableColumnResizing: false,
						}
					],
					data: []
				};
			});
})