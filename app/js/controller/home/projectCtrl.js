define(['app'], function(app) {
    app.register
        .controller('projectCtrl',
            function($scope, $stateParams) {
                $scope.isFadeIn = false;
                $scope.fadeIn = function() {
                    $scope.isFadeIn = true;
                };
                $scope.fadeOut = function() {
                    $scope.isFadeIn = false;
                };
                $scope.data = [{
                    'id': 1,
                    'level': -1,
                    'title': '用例1',
                    'nodes': [{
                        'id': 11,
                        'level': 0,
                        'title': '用例1.1',
                        'nodes': [{
                            'id': 111,
                            'level': 1,
                            'title': '用例1.1.1',
                            'nodes': [{
                                'id': 1111,
                                'level': 2,
                                'title': '用例1.1.1',
                                'nodes':[]
                            }]
                        }]
                    }, {
                        'id': 12,
                        'level': 0,
                        'title': '用例1.2',
                        'nodes': []
                    }]
                }];
                $scope.projectNavNow = $stateParams.num;
                //分页
                $scope.maxSize = 3;
                $scope.totalItems = 200;
                $scope.currentPage = 1;
                $scope.numPages = 3;
            });
    app.register.directive('ngRightClick', function($parse) {
        return function(scope, element, attrs) {
            var fn = $parse(attrs.ngRightClick);
            element.bind('contextmenu', function(event) {
                scope.$apply(function() {
                    event.preventDefault();
                    fn(scope, { $event: event });
                });
            });
        };
    });

})