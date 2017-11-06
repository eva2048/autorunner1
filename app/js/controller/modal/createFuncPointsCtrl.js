//需求-用例设计-功能点-新增场景
define(['app'], function(app) {
    app.register
        .controller('createFuncCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //表格初始化
                $http.get('./data/demand.php')
                    .success(function(data) {                       
                        $scope.gridOptionsScene.data = data.lists;                                           
                    });              
                //表格初始化
                i18nService.setCurrentLang("zh-cn");                              
                //测试用例表格
                $scope.gridOptionsScene = {
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
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "creater",
                            displayName: '关联组件',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "connectCaseNum",
                            displayName: '创建时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            enableColumnResizing: false,
                        }
                    ],
                    data: []
                };
            }
        )
})

