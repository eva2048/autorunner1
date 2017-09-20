define(['app'], function(app) {
    app.register
        .controller('projectNavTestsetCtrl',
            function($scope,$http) {
                //左导航
                $http.get('./data/testsetNav.php')
                    .success(function(data) {                       
                        $scope.data = data.lists;
                    });
               
            });
})