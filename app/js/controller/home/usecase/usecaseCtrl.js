define(['app'], function(app) {
    app.register
        .controller('usecaseCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //表格初始化
                $http.get('./data/usecase.php')
                    .success(function(data) {
                        $scope.gridOptionsUsecase.data = data.lists;                      
                    });
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridOptionsUsecase = {
                    enableRowSelection: true,
                    enableSelectAll: true,
                    selectionRowHeaderWidth: 40,
                    enableColumnResizing: true,
                    rowHeight: 40,
                    enableCellEdit: false,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'num',
                            displayName: '用例ID',
                            width: '10%',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "usecaseName",
                            displayName: '用例名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                            cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p">{{row.entity.usecaseName}}</div>',
                        },
                                             
                        {
                            field: "connectUsecaseNum",
                            displayName: '关联缺陷数',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            cellTemplate: '<div class="ui-grid-cell-contents tablecellfunc"><a class="f_blue" ui-sref="index.demand2">{{row.entity.connectUsecaseNum}}</a></div>',
                        } ,
                         {
                            field: "creater",
                            displayName: '创建人',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableColumnResizing: false,
                        }, 
                    ],
                    data:[]
                };
//               //测试用例数据表
//              $scope.gridOptionsUsecaseData = {
//                  enableColumnResizing: true,
//                  rowHeight: 40,
//                  enableCellEdit: false,
//                  enableFiltering: true,
//                  selectionRowHeaderWidth: 40,
//                  paginationPageSizes: [10, 15, 20], //每页显示个数可选项
//                  enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
//                  enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
//                  columnDefs: [
//                      {
//                          field: "usecaseName",
//                          displayName: '数据名称',
//                          enableSorting: false,
//                          enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true // 是否可编辑
//                      },
//                      {
//                          field: "creater",
//                          displayName: '数据值',
//                          enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          enableCellEdit: true // 是否可编辑
//                      },
//                      {
//                          field: "creater",
//                          displayName: '数据池',
//                          enableColumnMenu: false, // 是否显示列头部菜单按钮
//                      }
//                  ],
//                  data: []
//              };
            });
})