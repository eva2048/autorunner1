//加入项目
define(['app'], function(app) {
    app.register
        .controller('modalCtrl', ['$rootScope', '$scope', '$modal', '$log',
            function($rootScope, $scope, $modal, $log) {
                $scope.open = function(modalname) {
                    var templateUrl='tpls/modal/'+modalname+'.html';
                    var controller='modalInstanceCtrl';
                    var modalInstance = $modal.open({
                        templateUrl: templateUrl,
                        controller: controller,
                        resolve: {
                            items: function() {
                               
                            }
                        }
                    });
                    modalInstance.opened.then(function() { // 模态窗口打开之后执行的函数  
                        //console.log('modal is opened');
                    });
                    modalInstance.result.then(function(result) {
                        //console.log(result);
                    }, function(reason) {
                        //console.log(reason); // 点击空白区域，总会输出backdrop  
                        // click，点击取消，则会暑促cancel  
                        //$log.info('Modal dismissed at: ' + new Date());
                    });
                };
            }
        ])
})
