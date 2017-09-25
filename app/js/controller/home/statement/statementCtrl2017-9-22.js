define(['app'], function(app) {
    app.register
        .controller('statementCtrl',
            function($scope,$rootScope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //图表切换
                $rootScope.src="tpls/home/main/chart/chartcontent/chart0.html";
                $scope.chartChange=function(index){
                    $rootScope.src="tpls/home/main/chart/chartcontent/chart"+index+".html";
                };
                
                //表格初始化
                //显示数据字典
                var h = $("#statementDetail").height() / 2;
                $(".detailAttributeBottom").css("height", h);
                $(".detailAttributeBottom").css("maxHeight", h * 2 - 20);
                $(".detailAttributeTop").css("bottom", h);
                $scope.showDetail = function(row) {
                    $scope.gridOptions1.data = row.data;
                    if ($(".detailAttributeBottom").height() < 1) {
                        var h = $("#statementDetail").height() / 2;
                        $(".detailAttributeBottom").css("height", h);
                        $(".detailAttributeTop").css("bottom", h);
                    }
                };
                $scope.hideBottom = function() {
                    $(".detailAttributeBottom").css("height", "0");
                    $(".detailAttributeTop").css("bottom", "0");
                };
                $http.get('./data/statementmanage.php')
                    .success(function(data) {
                        $scope.gridOptionsStatement.data = data.lists;
                        $scope.gridOptionsChart1.data = data.lists;
                        $scope.gridOptionsChart2.data = data.lists;
                        $scope.gridOptionsChart3.data = data.lists;
                    });
                //报表管理页表格
                $scope.gridOptionsStatement = {
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
                            field: "name",
                            displayName: '运行名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p">{{row.entity.name}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '发起人',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '执行类型',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "starttime",
                            displayName: '开始时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "endtime",
                            displayName: '结束时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue" ui-sref="statementDetail")">查看日志</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false,
                        }
                    ],
                    data: [{}]
                };

                //图表详情页表格
                $http.get('./data/statement.php')
                    .success(function(data) {
                        $scope.gridOptions.data = data.lists;
                    });
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptions = {
                    enableSorting: false, //能否排序
                    enableFiltering: false, //能否筛选
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    showTreeExpandNoChildren: false,
                    enableColumnMenus: false,
                    rowHeight: 30,
                    cellClass: 'cellclass',
                    /*rowTemplate: "<div ng-click=\"grid.appScope.fadeOut()\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell ui-grid-cell-hover\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>",*/ //单击行事件
                    columnDefs: [{
                            name: 'ID',
                            displayName: 'ID',
                            width: '80',
                        },
                        {
                            name: 'name',
                            displayName: '用例名称',
                            cellTemplate: '<div ng-click="grid.appScope.showDetail(row.entity)" class="ui-grid-cell-contents f_blue cursor_p">{{row.entity.name}}</div>',
                        },
                        {
                            name: 'state',
                            width: '100',
                            displayName: '执行结果',
                            cellTemplate: '<div style="line-height:30px;text-align:center"><span class="glyphicon" ng-class="{\'glyphicon-ok\':row.entity.state==\'成功\',\'f_green\':row.entity.state==\'成功\',\'glyphicon-remove\':row.entity.state==\'失败\',\'f_red\':row.entity.state==\'失败\'}"></span></div>',
                        }
                    ],
                    data: [],
                    onRegisterApi: function(gridApi) {
                        $scope.gridApi = gridApi;
                    }
                };

                //图表表格2
                $scope.gridOptions1 = {
                    enableSorting: false, //能否排序
                    enableFiltering: false, //能否筛选
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    enableColumnMenus: false,
                    rowHeight: 30,
                    columnDefs: [{
                            name: 'num1',
                            displayName: '数据值',
                        },
                        {
                            name: 'num2',
                            displayName: '实际值',
                        },
                        {
                            name: 'result',
                            displayName: '校验结果',
                        }
                    ],
                    data: [],
                    onRegisterApi: function(gridApi) {
                        $scope.gridApi = gridApi;
                    }
                };
                $http.get('./data/statement.php')
                    .success(function(data) {
                        $scope.gridOptions1.data = data.lists[0].data;
                    });

                //饼图
                $scope.chart = {
                    options: {
                        chart: {
                            type: 'pie',
                            width:'200',
                            style:{
                                "margin": "0 auto"
                            }
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false
                                },
                                showInLegend: true
                            }
                        },
                        exporting: {
                            enabled: false
                        }
                    },
                    series: [{
                        name: '个数',
                        colorByPoint: true,
                        data: [{
                            name: '成功',
                            y: 1
                        }, {
                            name: '失败',
                            y: 0
                        }, {
                            name: '未执行数',
                            y: 0
                        }]
                    }],
                    title: {
                        text: '组件运行图'
                    },
                    size:{
                            width:200,
                            height:100
                        }

                };

                //需求运行明细
                $scope.gridOptionsChart1 = {
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
                            field: "name",
                            displayName: '需求名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.name}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '需求编号',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '成功用例数',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "starttime",
                            displayName: '失败用例数',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "endtime",
                            displayName: '未执行用例数',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: [{}]
                };
                //执行错误用例
                $scope.gridOptionsChart2 = {
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
                            field: "name",
                            displayName: '用例名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.name}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '用例编号',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '错误原因',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: [{}]
                };
                //缺陷统计报表
                $scope.gridOptionsChart3 = {
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
                            field: "name",
                            displayName: '缺陷编号',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.name}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '缺陷标题',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '严重程度',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '缺陷状态',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '测试版本',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "type",
                            displayName: '提交人',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data: [{}]
                };

            });
})