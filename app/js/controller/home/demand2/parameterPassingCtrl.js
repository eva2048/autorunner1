define(['app'], function(app) {
    app.register
        .controller('parameterPassingCtrl',
            function($scope) {
                //左导航
               var width=$(".component").width();            
               $scope.goLeft=function(){              	      		
               		$(".userCaseListTable").scrollLeft(width);              		
               }
                $scope.goRight=function(){
               		$(".userCaseListTable").scrollLeft(-width);              		
               }
            });
})