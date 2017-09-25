define(['app'], function(app) {
    app.register
        .controller('roleGroupManagementCtrl', ['$scope','$http',
            function($scope,$http) {
                 $http.get('./data/roleGroup.php')
                    .success(function(data) {
                        $scope.data = data.lists;
                    });
            }
        ])
})
