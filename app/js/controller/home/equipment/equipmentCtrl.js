define(['app'], function(app) {
    app.register
        .controller('equipmentCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/equipment.php')
                    .success(function(data) {                       
                        $scope.gridOptionsEquipment.data = data.lists;
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsEquipment = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,                      
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'ip',
                            displayName: 'IP地址',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                        },
                        {
                            field: "user",
                            displayName: '用户',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "type",
                            displayName: '执行器类型',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "state",
                            displayName: '执行器状态',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "remark",
                            displayName: '备注',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true, // 是否可编辑
                        },                        
                        {
                            field: "action",
                            displayName: '操作处理',
                            minWidth:350,
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue" >编辑</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false,
                        }
                    ],
                    data:[]
                };
            });
})