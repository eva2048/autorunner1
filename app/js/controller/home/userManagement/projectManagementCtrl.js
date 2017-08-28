define(['app'], function(app) {
    app.register
        .controller('projectManagementCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/projectManagement.php')
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
                            field: 'projectName',
                            displayName: '项目名称',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                       },                       
                        {
                            field: "creater",
                            displayName: '创建人',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },                       
                        {
                            field: "State",
                            displayName: '启用状态',
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
                            field: "tasksNum",
                            displayName: '任务数',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        }, 
                        {
                            field: "action",
                            displayName: '操作',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data:[]
                };
            });
})