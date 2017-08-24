define(['app'], function(app) {
    app.register
        .controller('projectCreateProjectCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                //项目详情
                //项目模块
                $scope.pModel2 = ['123', '222'];
                $scope.sModelDel2 = function(val) {
                    $scope.pModel2.splice(val, 1);
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
                $scope.addModel2 = function(e) {
                    var keycode = window.event ? e.keyCode : e.which;
                    if (keycode == 13) {
                        if (!arrindex($scope.pModel2, $scope.modelItem2)) {
                            $scope.pModel2.push($scope.modelItem2);
                            $scope.modelItem2 = '';
                        } else {
                            $scope.modelItem2 = '';
                        }
                    }
                };
               
             
               
               
            });
})