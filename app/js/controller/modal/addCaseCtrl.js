//添加活动
define(['app'], function(app) {
	app.register
		.controller('addCaseCtrl', ['$rootScope', '$scope', '$modal', '$log',
			function($rootScope, $scope, $modal, $log) {
				$scope.addCase = [{
					"name": "用例1"
				}, {
					"name": "用例2"
				}, {
					"name": "用例3"
				}]
				$scope.remove = function(index) {
					$scope.addCase.splice(index, 1);
				}
				$scope.addItem = function() {					
					var item={
						"name":""
					}
					$scope.addCase.push(item);
				}
			}
		])
})