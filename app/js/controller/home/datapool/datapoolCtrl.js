define(['app'], function(app) {
    app.register
        .controller('datapoolCtrl',
            function($scope, $stateParams, $interval, $timeout, uiGridTreeViewConstants, $http, i18nService) {
                var usdeur = [
                    [Date.UTC(2007, 7, 21, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)],
                    [Date.UTC(2007, 7, 22, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)],
                    [Date.UTC(2007, 7, 23, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)],
                    [Date.UTC(2007, 7, 24, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)],
                    [Date.UTC(2007, 7, 31, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)]
                ];
                //饼图
                $scope.chart1 = {
                    options: {
                        chart: {
                            type: 'columnrange',
                            inverted: true
                        },
                        xAxis: {
                            categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                        },
                        yAxis: {
                            type: "datetime", //时间轴要加上这个type，默认是linear
                            dateTimeLabelFormats: {
                                second: '%Y-%m-%d<br/>%H:%M:%S',
                                minute: '%e.%b %H:%M',
                                hour: '%m/%e %H:%M',
                                day: '%m.%d',
                                week: '%e. %b',
                                month: '%b %y',
                                year: '%Y'
                            }
                        },
                        /*rangeSelector: {
					        selected: 1,
					        enabled:true
					    },*/
                        navigator: {
                            enabled: true,
                            opposite: true
                        }
                    },
                    series: [{
                        data: [
                            [Date.UTC(2007, 7, 20, 12, 30, 45), Date.UTC(2007, 7, 21, 12, 30, 45)],
                            [Date.UTC(2007, 7, 18, 12, 30, 45), Date.UTC(2007, 7, 19, 12, 30, 45)],
                            [Date.UTC(2007, 7, 5, 12, 25, 45), Date.UTC(2007, 7, 12, 12, 30, 45)],
                            [Date.UTC(2007, 7, 12, 12, 30, 45), Date.UTC(2007, 7, 14, 12, 30, 45)],
                            [Date.UTC(2007, 7, 12, 12, 30, 45), Date.UTC(2007, 7, 11, 12, 30, 45)]
                        ]
                    }],

                };
                $scope.chart2 = {
                    options: {
                        chart: {
                            type: 'bar'
                        },
                        xAxis: {
                            categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                            title: {
                                text: null
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: '人口总量 (百万)',
                                align: 'high'
                            },
                            labels: {
                                overflow: 'justify'
                            }
                        },
                    },
                    series: [{
                        name: '1800 年',
                        data: [107, 31, 635, 203, 2]
                    }, {
                        name: '1900 年',
                        data: [133, 156, 947, 408, 6]
                    }, {
                        name: '2008 年',
                        data: [973, 914, 4054, 732, 34]
                    }]
                };
                $scope.chart3 = {};
                $scope.endtime = new Date();


                //用例执行情况
                //时间位数为1位时，前面补0；
                var setFormat = function(x) {
                    if (x < 10) {
                        x = "0" + x;
                    }
                    return x;
                };
                function beforeNowtime(startime, beforetime) {
                	startime=$scope.endtimeString;
                    var now=startime-1000*60*60*beforetime;
                    return now;
                };
                /*定义数据*/
                
                //定义时间范围类型
                $scope.timerange = 1/60;
                //定义列表宽度
                $scope.statewidth = 360;
                //是否显示不在当前时间范围内的用例
                $scope.showall=true;
                //定义结束时间
                $scope.endtime = new Date('2017-9-18 16:52:00');
                $scope.endtimeString = Date.parse($scope.endtime);
                //定义开始时间
                $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                $scope.t = new Date('2017-9-18 16:52:00');
                $scope.ts = Date.parse($scope.t);
                console.log($scope.ts);
                //计算每分钟占几px
                $scope.pxmin = $scope.statewidth / 3600 / $scope.timerange;
                //数据
                $http.get('./data/cases.php')
                    .success(function(data) {
                        $scope.casedata = data.cases;
                        returndata($scope.casedata);
                    });
                /*定义方法*/
                //计算两个时间戳相差的秒数
                var turnmin = function(t1, t2) {
                    if (t1 > t2) {
                        return parseInt((t1 - t2) / 1000);
                    } else {
                        return parseInt((t2 - t1) / 1000);
                    }
                };
                //获取进度条右侧位置
                var findPot = function(timestring) {
                    if (timestring < $scope.endtimeString) {
                        var fp = turnmin(timestring, $scope.endtimeString) * $scope.pxmin;
                        return fp;
                    } else {
                        return 0;
                    };
                };
                //获取进度条左侧位置
                var findPot1 = function(timestring1) {
                    if (timestring1 < $scope.starttimeString) {
                        return 0;
                    } else {
                        var fp = turnmin($scope.starttimeString, timestring1) * $scope.pxmin;
                        return fp;
                    }
                };
                //转换数据
                var returndata=function(data){
                	for(var i=0;i<data.length;i++){
                		data[i].potleft=findPot1(data[i].starttime);
                		data[i].potright=findPot(data[i].endtime);
                	}
                };
                //设置时间范围（时/日）        
                $scope.setTimerange = function(length) {
                    $scope.timerange = length;
                    $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                    $scope.pxmin = $scope.statewidth / 3600 / $scope.timerange;
                    returndata($scope.casedata);
                };              
                //获取进度条颜色
                $scope.getcolor = function(state) {
                    switch (state) {
                        case "0":
                            return "#ff9802";
                            break;
                        case "1":
                            return "#008bff";
                            break;
                        case "2":
                            return "#fa4552";
                            break;
                    };
                };
                //获取用例运行状态
                $scope.getstate = function(state) {
                    switch (state) {
                        case "0":
                            return "执行中";
                            break;
                        case "1":
                            return "执行成功";
                            break;
                        case "2":
                            return "执行失败";
                            break;
                    };
                };
                //实时更新
                var updatedata=function(){
                	$scope.endtimeString=$scope.endtimeString+1000;
                	$scope.starttimeString = $scope.starttimeString+1000;
                	$http.get('./data/cases.php')
                    .success(function(data) {
                        $scope.casedata = data.cases;
                        returndata($scope.casedata);                   
                    });
                };
                $scope.timer=$interval(function(){
                	updatedata();
                },1000);

            });})