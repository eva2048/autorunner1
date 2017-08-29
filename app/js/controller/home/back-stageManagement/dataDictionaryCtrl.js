define(['app'], function(app) {
    app.register
        .controller('dataDictionaryCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                //表格初始化
                $http.get('./data/dataDictionary.php')
                    .success(function(data) {                       
                        $scope.gridAttributeValue.data = data.lists;
                    });              
                //表格初始化
                i18nService.setCurrentLang("zh-cn");
                $scope.gridAttributeValue = {
                    enableColumnResizing:false,
                    rowHeight: 40,
                    enableCellEdit:false,
                    selectionRowHeaderWidth: 40,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'attributeValue',
                            displayName: '属性值',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options', 
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
//                          cellTemplate: '<div class="f_blue ui-grid-cell-contents cursor_p"  ng-click="grid.appScope.fadeIn();$event.stopPropagation();">{{row.entity.num}}</div>',
                       }
                        
                    ],
                    data:[]
                };
            });
})