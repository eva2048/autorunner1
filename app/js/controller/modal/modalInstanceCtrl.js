//加入项目
define(['app'], function(app) {
	app.register
		.controller('modalInstanceCtrl', ['$scope', '$modalInstance', '$log','$http',
			function($scope, $modalInstance, items,$http) {
				$scope.items = items;
				$scope.selected = {
					item: $scope.items[0]
				};
				
				$scope.pModel = ['123', '222'];
                //日期控件1
                $scope.inlineOptions = {
                    showWeeks: false
                };
                $scope.dat = new Date();
                $scope.dat0 = new Date();
                $scope.format = "yyyy/MM/dd";
                $scope.altInputFormats = ['yyyy/M!/d!'];
                $scope.popup1 = {
                    opened: false
                };
                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                $scope.sModelDel = function(val) {
                    $scope.pModel.splice(val, 1);
                };

                function arrindex(arr, obj) { //判断是否重复  
                    var i = arr.length;
                    while (i--) {
                        if (arr[i] === obj) {
                            return true;
                        }
                    }
                    return false;
                };
                $scope.addModel = function(e) {
                    var keycode = window.event ? e.keyCode : e.which;
                    if (keycode == 13) {
                        if (!arrindex($scope.pModel, $scope.modelItem)) {
                            $scope.pModel.push($scope.modelItem);
                            $scope.modelItem = '';
                        } else {
                            $scope.modelItem = '';
                        }
                    }
                };
				$scope.ok = function() {
					$modalInstance.close($scope.selected);
				};
				$scope.cancel = function() {
					$modalInstance.dismiss('cancel');
				};
				$http.get('./data/treenav1.php')
					.success(function(data) {
						$scope.data = data.lists;
					});
					//左侧导航树数据类型2
                $http.get('./data/treenav1.php')
                    .success(function(data) {
                        $scope.treedata1 = data.lists;
                    });
                //表格初始化
                $http.get('./data/usecase.php')
                    .success(function(data) {
                        $scope.gridOptionsModal.data = data.lists;
                    });
                //表格初始化
                $scope.gridOptionsModal = {
                    enableRowSelection: true,
                    enableSelectAll: true,
                    selectionRowHeaderWidth: 40,
                    enableColumnResizing: true,
                    rowHeight: 30,
                    enableCellEdit: false,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'num',
                            displayName: '序号',
                            width: '10%',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "usecaseName",
                            displayName: '公司名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "creater",
                            displayName: '公司地址',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                    ],
                    data:[]
                };                                                                                        
			}
		])
})