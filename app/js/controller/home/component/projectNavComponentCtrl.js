define(['app'], function(app) {
    app.register
        .controller('projectNavComponentCtrl',
            function($scope,$http) {
                //左导航
                $http.get('./data/componentNav.php')
                    .success(function(data) {                       
                        $scope.data = data.lists;
                    });
               
            });
})