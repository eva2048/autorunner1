define(['app'], function(app) {
    app.register
        .controller('projectNavDemandCtrl',
            function($scope,$http) {
                //左导航
                $http.get('./data/demandNav.php')
                    .success(function(data) {                       
                        $scope.data = data.lists;
                    });
               
            });
})