define(['app'], function(app) {
    app.register
        .controller('componentDetailCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {                
                //详情数据维护
                $http.get('./data/componentDetail.php')
                    .success(function(data) {                       
                        $scope.gridOptionsComp1.data = data.lists;
                    });
                $scope.gridOptionsComp1= {
//                  enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    columnDefs: [
                        {
                            field: "parameterName",
                            displayName: '参数名称',
                            width:100,
                            enableSorting: false,
                            enableColumnMenu: false // 是否显示列头部菜单按钮                                           
                        },
                        {
                            field: "value",
                            displayName: '值',
                            enableColumnMenu: false// 是否显示列头部菜单按钮
                        },
                        {
                       		field: "readonly",
                            displayName: '是否只读',
                            width:100,
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮                           
                            cellTemplate: '<select name="" style="width:100%;height:40px;line-height:40px;border:none"><option value="">只读</option><option value="">只读</option><option value="">只读</option></select>'
                        },
                        {
                       		field: "parameterType",
                            displayName: '参数类型',
                            width:100,
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮                           
                            cellTemplate: '<select name="" style="width:100%;height:40px;line-height:40px;border:none"><option value="">入参</option><option value="">出参</option><option value="">只读</option></select>'
                        },
                         {
                            field: "description",
                            displayName: '描述',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            enableColumnResizing: false
                        }
                    ],
                    data:[]
                };
            });
})