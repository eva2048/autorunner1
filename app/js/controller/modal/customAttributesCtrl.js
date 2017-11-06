//定制属性
define(['app'], function(app) {
	app.register
		.controller('customAttributesCtrl', ['$scope', '$modal',
			function($scope, $modal) {
				$scope.leftList = [{
					'name': '模板项目模板项目模板项目模板项目模板项目'
				}, {
					'name': "模板项目2"
				}];
				$scope.addListItem = function() {
					var item = {
						"name": ""
					}
					$scope.leftList.push(item);
				};
				$scope.deleteItem=function(index){
					$scope.leftList.splice(index, 1);
				}
				$scope.projectAttribute = [{
						"role": "缺陷属性",
						"members": [

						]
					},
					{
						"role": "用例属性",
						"members": [{
								"name": 'humq属性一属性',
								"showType": 'TextInput',
								"show": true
							},
							{
								"name": 'wumx',
								"showType": 'comoBox',
								"show": false
							},
							{
								"name": 'aaaaaaa',
								"showType": 'Date',
								"show": true
							}
						]
					}	,
					{
						"role": "用例属性",
						"members": [{
								"name": 'humq属性一属性',
								"showType": 'TextInput',
								"show": true
							},
							{
								"name": 'wumx',
								"showType": 'comoBox',
								"show": false
							},
							{
								"name": 'aaaaaaa',
								"showType": 'Date',
								"show": true
							}
						]
					}
				];
				$scope.openTableList = function($event) {
					var openTableListOl = $($event.target).parents(".openTableListTitle").siblings(".openTableListOl");
					if(openTableListOl.is(":hidden")) {
						openTableListOl.show();
						$($event.target).addClass("icon-shouqi");
					} else {
						openTableListOl.hide();
						$($event.target).removeClass("icon-shouqi");
					}
				}
			}
		])
})