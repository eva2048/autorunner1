define(['app'], function(app) {
	app.register
		.controller('demandCtrl',
			function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
				//表格初始化
				$http.get('./data/demand.php')
					.success(function(data) {
						$scope.gridOptionsDemand.data = data.lists;
						$scope.gridOptionsHistory.data = data.lists;
						$scope.gridOptionsRuleScene.data = data.lists;
					});
				$http.get('./data/caseScene.php')
					.success(function(data) {
						$scope.gridOptionsCaseScene.data = data.lists;
					});
				$http.get('./data/componentConfigurator.php')
					.success(function(data) {
						$scope.gridOptionsComponentConfigurator.data = data.lists;
					});
				//表格初始化
				i18nService.setCurrentLang("zh-cn");
				$scope.gridOptionsDemand = {
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					enableFiltering: true,
					selectionRowHeaderWidth: 40,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: 'reqID',
							displayName: '需求ID',
							
							width: '10%',
							editableCellTemplate: 'ui-grid/dropdownEditor',
							editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
							editDropdownIdLabel: 'value',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "demandName",
							displayName: '需求名称',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮                           
							cellTemplate: '<a class="f_blue ui-grid-cell-contents cursor_p" ui-sref="index.demand2">{{row.entity.demandName}}</a>',
						},
						{
							field: "demandState",
							displayName: '需求状态',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "priority",
							displayName: '优先级',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "manager",
							displayName: '负责人',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "connectCaseNum",
							displayName: '用例数',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "demandType",
							displayName: '需求类型',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "creater",
							displayName: '创建人',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},

						{
							field: "createTime",
							displayName: '创建时间',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "lastupdateTime",
							displayName: '最后更新时间',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableColumnResizing: false,
						}
					],
					data: []
				};

				//用例场景
				$scope.gridOptionsCaseScene = {
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					enableFiltering: true,
					selectionRowHeaderWidth: 40,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: "sceneName",
							displayName: '场景名称',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "regulation",
							displayName: '场景覆盖功能点',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "caseNum",
							displayName: '用例数',
							enableColumnMenu: false, // 是否显示列头部菜单按钮							
						},
						{
							field: "creater",
							displayName: '创建人',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						
						},
						{
							field: "createTime",
							displayName: '创建日期',
							enableColumnMenu: false, // 是否显示列头部菜单按钮						
						},
						{
							field: "action",
							displayName: '操作',
							enableColumnResizing: false,
							cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ui-sref="index.demand2.componentConfigurator">组件配置</a><a class="f_blue cursor_p" ui-sref="index.demand2.parameterPassing">数据设计</a></div>',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						}
					],
					data: []
				};
				//              规则场景
				$scope.gridOptionsRuleScene = {
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					enableFiltering: true,
					selectionRowHeaderWidth: 40,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: 'num',
							displayName: 'ID',
							width: '10%',
							editableCellTemplate: 'ui-grid/dropdownEditor',
							editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
							editDropdownIdLabel: 'value',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "demandName",
							displayName: '功能点名称',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "creater",
							displayName: '关联组件',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "creater",
							displayName: '定义',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "connectCaseNum",
							displayName: '数据量',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						}
					],
					data: []
				};
				//组件配置
				$scope.gridOptionsComponentConfigurator = {
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					enableFiltering: true,
					selectionRowHeaderWidth: 40,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: 'name',
							displayName: '组件名称',						
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "sequence",
							displayName: '执行顺序',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮														
						},
						{
							field: "prototype",
							displayName: '组件原型',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
							enableColumnResizing: false,
						}
					],
					data: []
				};
				//需求历史表格
				$scope.gridOptionsHistory = {
					enableColumnResizing: true,
					rowHeight: 40,
					enableCellEdit: false,
					enableFiltering: true,
					selectionRowHeaderWidth: 40,
					paginationPageSizes: [10, 15, 20], //每页显示个数可选项
					enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
					enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
					columnDefs: [{
							field: 'num',
							displayName: '修改项',
							width: '10%',
							editableCellTemplate: 'ui-grid/dropdownEditor',
							editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
							editDropdownIdLabel: 'value',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "demandName",
							displayName: '修改前值',
							enableSorting: false,
							enableColumnMenu: false, // 是否显示列头部菜单按钮
							enableCellEdit: true, // 是否可编辑
						},
						{
							field: "creater",
							displayName: '修改后值',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "creater",
							displayName: '修改者',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						},
						{
							field: "connectCaseNum",
							displayName: '修改时间',
							enableColumnMenu: false, // 是否显示列头部菜单按钮
						}
					],
					data: []
				};
			});
})