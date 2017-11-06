define(['app'], function(app) {
    app.register
        .controller('testSetCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/testset.php')
                    .success(function(data) {                       
                        $scope.gridOptionsTestset.data = data.lists;
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsTestset = {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'caseID',
                            displayName: '用例ID',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.caseID}}</div>',
                        },
                        {
                            field: "caseName",
                            displayName: '用例名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮                            
                        },
                        {
                            field: "csequence",
                            displayName: '执行顺序',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮                            
                        },
                        {
                            field: "state",
                            displayName: '执行状态',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮                            
                        },                       
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue" ng-click="grid.appScope.open(\'performUserCase\',\'lg\')">发起执行</a><a class="f_blue">提交缺陷</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data:[]
                };
            });
})