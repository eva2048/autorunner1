define(['app'], function(app) {
    app.register
        .controller('componentCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/demand.php')
                    .success(function(data) {                       
                        $scope.gridOptionsComponent.data = data.lists;
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsComponent= {
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项

                    columnDefs: [
                        {
                            field: "demandName",
                            displayName: '组件名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.demandName}}</div>',
                        },
                        {
                            field: "createTime",
                            displayName: '创建时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "functionPoint",
                            displayName: '关联功能点',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            cellTemplate:'<div class="ui-grid-cell-contents"><i ng-click="grid.appScope.open(\'functionPoint\')" title="测试集管理" class="iconfont icon-createtask_fill f_blue cursor_p"></i><span class="marginl_10">0</span></div>'
                        },
                        {
                            field: "demandState",
                            displayName: '运行环境',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "priority",
                            displayName: '脚本名',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            enableColumnResizing: false,
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue cursor_p" ng-click="grid.appScope.alertTip($event,\'aa\',\'aaaaaaaa\')">下载脚本</a><a class="f_blue" ng-click="grid.appScope.open(\'updateScript\',\'lg\')">编辑</a><a class="f_red">删除</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        }
                    ],
                    data:[]
                };               
            });
})