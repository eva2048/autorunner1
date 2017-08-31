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
			}
		])
})