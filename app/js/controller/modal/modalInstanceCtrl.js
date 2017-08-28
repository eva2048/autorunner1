//加入项目
define(['app'], function(app) {
	app.register
		.controller('modalInstanceCtrl', ['$scope', '$modalInstance', '$log','$http',
			function($scope, $modalInstance, items,$http) {
				$scope.items = items;
				$scope.selected = {
					item: $scope.items[0]
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
			}
		])
})