//添加活动
define(['app'], function(app) {
	app.register
		.controller('addActivityCtrl', ['$rootScope', '$scope', '$modal', '$log',
			function($rootScope, $scope, $modal, $log) {
				$scope.addActivity = [{
					"name": "111"
				}, {
					"name": "222"
				}, {
					"name": "333"
				}]
				$scope.remove = function(index) {
					$scope.addActivity.splice(index, 1);
				}
				$scope.addItem = function() {					
					var item={
						"name":""
					}
					$scope.addActivity.push(item);
				}
			}
		])
})