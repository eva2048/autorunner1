define(['app'], function(app) {
    app.register
        .controller('bugCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //表格初始化
                $http.get('./data/usecase.php')
                    .success(function(data) {
                        $scope.gridOptionsBug.data = data.lists;
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsBug = {
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
                            field: 'num',
                            displayName: 'ID',
                            width: '10%',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "usecaseName",
                            displayName: '缺陷名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.usecaseName}}</div>',
                        },
                        {
                            field: "creater",
                            displayName: '缺陷状态',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "creater",
                            displayName: '缺陷等级',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "creater",
                            displayName: '项目模块',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "createTime",
                            displayName: '创建时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "createTime",
                            displayName: '最后更新时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "connectUsecaseNum",
                            displayName: '提交者',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "connectDemandScene",
                            displayName: '处理者',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">编辑</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data:[]
                };
            });
})