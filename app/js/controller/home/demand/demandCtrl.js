define(['app'], function(app) {
    app.register
        .controller('demandCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //表格初始化
                $http.get('./data/demand.php')
                    .success(function(data) {
                        $scope.gridOptionsDemand.data = data.lists;
                        $scope.gridOptionsUsecaseData.data = data.lists;
                        $scope.gridOptionsUsecase.data = data.lists;
                        $scope.gridOptionsHistory.data = data.lists;                        
                    });
                $http.get('./data/demand.php')
                    .success(function(data) {
                        $scope.gridOptionsFuncPoints.data = data.lists;
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
                            field: 'num',
                            displayName: '标识',
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
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ui-sref="index.demand.demandDetails">{{row.entity.demandName}}</div>',
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
                            field: "lastupdateTime",
                            displayName: '最后更新时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "assign",
                            displayName: '指派',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "connectCaseNum",
                            displayName: '关联用例数',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">指派</a><a class="f_blue">创建用例</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: []
                };
                //功能点表格
                $scope.gridOptionsFuncPoints = {
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
                        },
                        {
                            field: "creater",
                            displayName: '定义',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "connectCaseNum",
                            displayName: '数据量',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作',
                            enableColumnResizing: false,
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">配属</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: []
                };
                //测试用例表格
                $scope.gridOptionsUsecase = {
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
                            displayName: '用例名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p">{{row.entity.demandName}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '类型',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "creater",
                            displayName: '关联组件',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "connectCaseNum",
                            displayName: '创建时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: []
                };
                //测试用例数据表
                $scope.gridOptionsUsecaseData = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit: false,
                    enableFiltering: true,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [
                        {
                            field: "demandName",
                            displayName: '数据名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true // 是否可编辑
                        },
                        {
                            field: "creater",
                            displayName: '数据值',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true // 是否可编辑
                        },
                        {
                            field: "creater",
                            displayName: '数据池',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
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