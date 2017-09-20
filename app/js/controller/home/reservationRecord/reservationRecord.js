define(['app'], function(app) {
    app.register
        .controller('reservationRecordCtrl',
            function($scope,$rootScope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {                             
                //表格初始化             
                $http.get('./data/reservationRecord.php')
                    .success(function(data) {
                        $scope.gridOptionsReservationRecord.data = data.lists;                        
                    });
                //报表管理页表格
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsReservationRecord = {
                    enableRowSelection: true,
                    enableSelectAll: true,
                    selectionRowHeaderWidth: 40,
                    enableColumnResizing: true,
                    enableHiding: false,
                    rowHeight: 40,
                    enableCellEdit: false,  
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: "testSet",
                            displayName: '测试集',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p" ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.testSet}}</div>',
                        },
                        {
                            field: "task",
                            displayName: '所属任务',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "actuator",
                            displayName: '执行器',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "reservationPeople",
                            displayName: '预约人',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "reservationTime",
                            displayName: '预约时间',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "runningMode",
                            displayName: '运行模式',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "action",
                            displayName: '操作处理',
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_red">取消</a></div>',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false,
                        }
                    ],
                    data: [{}]
                };                            
            });
})