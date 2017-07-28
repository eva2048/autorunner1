define(['app'], function(app) {
    app.register
        .controller('projectCtrl',
            function($scope, $stateParams) {
                $scope.isAttribute = 0;
                $scope.isFadeIn = false;
                $scope.fadeIn = function() {
                    $scope.isFadeIn = true;
                    var width=$(".useCaseList ").width()-200;
                    if(width>1000){
                        width=1000;
                    }
                    $(".projectDetailStyle").css("width",width)
                };
                $scope.fadeOut = function() {
                    $scope.isFadeIn = false;
                    $(".projectDetailStyle").css("width","0")
                };
                $scope.slideLeft=function(){
                    var w=$(".projectNav").width();
                    if(w>70){
                        $scope.projectNavStyle={
                            "width":"70px" ,
                            "transition": "all 0.3s"
                        };                      
                        $scope.projectBodyStyle={
                            "transition": "all 0.3s",
                            "left":"70px",
                            
                        }
                        
                    }else{
                        $scope.projectNavStyle={
                            "width":"280px",
                            "transition": "all 0.3s"
                        };                      
                        $scope.projectBodyStyle={
                            "transition": "all 0.3s",
                            "left":"280px"
                        }
                    }                   
                }
                $scope.treeHide=function(){
                    var wid=$('.useCaseTree').width();
                    if(wid>5){
                        $scope.useCaseTreeStyle={
                            "width":"0px" ,                         
                            "transition": "all 0.3s"
                        };
                        $scope.useCaseListStyle={
                            "transition": "all 0.3s",
                            "left":"0px"
                        }
                        $(".treeBody").css("padding","0");
                        $(".useCaseTree .title").css({"padding":"0","overflow":"hidden"})
                    }else{
                        $scope.useCaseTreeStyle={
                            "width":"330px" ,                           
                            "transition": "all 0.3s"
                        };
                        $scope.useCaseListStyle={
                            "transition": "all 0.3s",
                            "left":"330px"
                        }
                        $(".treeBody").css("padding","15px");
                        $(".useCaseTree .title").css({"padding":"0 15px","overflow":"hidden"})
                    }
                }
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