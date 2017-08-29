define(['app'], function(app) {
    app.register
        .controller('defectProcessCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
               $scope.edit=0;               
            });
})