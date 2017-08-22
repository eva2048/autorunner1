define(['app'], function(app) {
    app.register
        .controller('projectCtrl',
            function($scope, $stateParams, $interval, $timeout,uiGridTreeViewConstants,$http,i18nService) {
                /*提示弹窗*/
                /*关闭错误提示*/
                var tiptimer = function() {
                    $('#mdAlertDialog').remove();
                };               
                $scope.alertTip = function($event, type, content) {
                    var alertTiptimer = $timeout(tiptimer, 2000);
                    var alert = "<div class='mdAlertDialog' id='mdAlertDialog'><i class='iconfont icon-feedback_fill'></i><span id='alertContent'>" + content + "</span><i id='mdAlertDialogClose' class='iconfont icon-close'></i></div>";
                    $($event.target).after(alert);
                    $('#mdAlertDialog').css('display', 'block');
                    var mdAlertDialogWidth = $('#mdAlertDialog').width();
                    $('#mdAlertDialog').css('margin-left', -mdAlertDialogWidth / 2);
                    $('#mdAlertDialogClose').click(function() {
                        $('#mdAlertDialog').remove();
                    })
                };

                
                $scope.isAttribute = 0;
                $scope.isFadeIn = false;
                $scope.leftOut = true;
                $scope.treeOut = true;
                //日期控件1
                $scope.dat = new Date();
                $scope.dat0 = new Date();
                $scope.format = "yyyy/MM/dd";
                $scope.altInputFormats = ['yyyy/M!/d!'];
                $scope.popup1 = {
                    opened: false
                };
                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                //日期控件2
                $scope.dat1 = ''
                $scope.format1 = "yyyy/MM/dd";
                $scope.altInputFormats1 = ['yyyy/M!/d!'];
                $scope.popup2 = {
                    opened: false
                };
                $scope.open2 = function() {
                    $scope.popup2.opened = true;
                };
                $scope.fadeIn = function() {
                    $scope.isFadeIn = true;
                };
                $scope.fadeOut = function() {
                    $scope.isFadeIn = false;
                };
                $scope.back = function() {
                    history.go(-1);
                }
                //左侧导航树数据
                $http.get('./data/treenav.php')
                    .success(function(data) {
                        $scope.data = data.lists;
                    });
                /*创建自定义长度数组*/
                $scope.range = function(n) {
                    return new Array(n);
                };
                /*字符串转数组*/
                $scope.turnArray = function(n) {
                    return n.split(",");
                };
                /*文件上传*/
                /*定时器*/
                //定时器方法
                $scope.fileuploadSize = 0;
                var timer = function() {
                    if ($scope.fileuploadSize <= 100) {
                        $scope.fileuploadSize++;
                    } else {
                        $interval.cancel(fileupload);
                        $scope.fileuploadSize = -1;
                    }
                };
                //启用定时器
                var fileupload = $interval(timer, 100); //间隔2秒定时执行

                $scope.projectNavNow = $stateParams.num;
                //分页
                $scope.maxSize = 3;
                $scope.totalItems = 200;
                $scope.currentPage = 1;
                $scope.numPages = 3;
                $scope.addDescribe = false;
                    
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
    app.register.directive(
            "bnDocumentClick",
            function($document, $parse) {
                //将Angular的上下文链接到DOM事件
                var linkFunction = function($scope, $element, $attributes) {
                        //获得表达式
                        var scopeExpression = $attributes.bnDocumentClick;
                        //使用$parse来编译表达式
                        var invoker = $parse(scopeExpression);
                        //绑定click事件
                        $document.on(
                                "click",
                                function(event) {
                                    //当点击事件被触发时，我们需要再次调用AngularJS的上下文。再次，我们使用$apply()来确保$digest()方法在幕后被调用
                                    $scope.$apply(
                                            function() {
                                                //在scope中调用处理函数，将jQuery时间映射到$event对象上
                                                invoker(
                                                        $scope, {
                                                            $event: event
                                                        }                        );

                            }
                        );

                    }
                );
                //当父控制器被从渲染文档中移除时监听"$destory"事件
            };
            //返回linking函数
            return (linkFunction);
        }
    );})