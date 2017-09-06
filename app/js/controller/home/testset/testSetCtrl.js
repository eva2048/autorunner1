define(['app'], function(app) {
    app.register
        .controller('testSetCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService,) {
                //表格初始化
                $http.get('./data/demand.php')
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
                            field: 'num',
                            displayName: '测试集名称',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                        },
                        {
                            field: "demandName",
                            displayName: '描述',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">编辑</a><a class="f_blue">复制</a><a class="f_blue">剪切</a><a class="f_blue" ng-click="grid.appScope.open(\'runningDevice\',\'lg\')">发起执行</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data:[]
                };
            });
})