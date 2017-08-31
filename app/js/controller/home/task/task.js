define(['app'], function(app) {
    app.register
        .controller('taskCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/task.php')
                    .success(function(data) {                       
                        $scope.gridOptionsTask.data = data.lists;
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsTask = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'taskName',
                            displayName: '任务名称',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                        },
                        {
                            field: "createName",
                            displayName: '创建人',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "createTime",
                            displayName: '创建时间',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "executeTime",
                            displayName: '最近执行时间',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "executeState",
                            displayName: '关联测试集',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },                        
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.open(\'runningDeviceChooseCase\')">立即执行</a><a class="f_red">预约执行</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false,
                        }
                    ],
                    data:[]
                };
            });
})