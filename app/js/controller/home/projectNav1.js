//加入项目
define(['app'], function(app) {
    app.register
        .controller('projectNav1', ['$scope','$http',
            function($scope,$http) {
                 $http.get('./data/treenav1.php')
                    .success(function(data) {
                        $scope.data = data.lists;
                    });
            }
        ])
})
