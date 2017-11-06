define(['app'], function(app) {
    app.register
        .controller('projectManagementCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/projectManagement.php')
                    .success(function(data) {                       
                        $scope.gridOptionsProjectManagement.data = data.lists;
                    });              
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsProjectManagement = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'projectCode',
                            displayName: '项目代码',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                       },    
                       {
                            field: "projectName",
                            displayName: '项目名称',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }, 
                        {
                            field: "projectType",
                            displayName: '项目类型',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }, 
                         {
                            field: "State",
                            displayName: '项目状态',
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
                            field: "projectmanager",
                            displayName: '项目经理',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },  
                        {
                            field: "action",
                            displayName: '操作',
                            enableSorting: false,
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">编辑</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false
                        }
                    ],
                    data:[]
                };
            });
})