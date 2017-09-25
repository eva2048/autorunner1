//加入项目
define(['app'], function(app) {
	app.register
		.controller('modalInstanceCtrl', ['$scope', '$modalInstance', '$log','$http','$interval',
			function($scope, $modalInstance, items,$http,$interval) {
				$scope.items = items;
				$scope.selected = {
					item: $scope.items[0]
				};
				$scope.pModel = ['123', '222'];
                //日期控件1
                $scope.inlineOptions = {
                    showWeeks: false
                };
                $scope.dat = new Date();
                $scope.dat0 = new Date();
                $scope.format = "yyyy-MM-dd";
                $scope.altInputFormats = ['yyyy/M!/d!'];
                $scope.popup1 = {
                    opened: false
                };
                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                $scope.sModelDel = function(val) {
                    $scope.pModel.splice(val, 1);
                };

                function arrindex(arr, obj) { //判断是否重复  
                    var i = arr.length;
                    while (i--) {
                        if (arr[i] === obj) {
                            return true;
                        }
                    }
                    return false;
                };
                //预约执行新增执行类型
                $scope.addModel = function(e) {
                    var keycode = window.event ? e.keyCode : e.which;
                    if (keycode == 13) {
                        if (!arrindex($scope.pModel, $scope.modelItem)) {
                            $scope.pModel.push($scope.modelItem);
                            $scope.modelItem = '';
                        } else {
                            $scope.modelItem = '';
                        }
                    }
                };
				$scope.ok = function() {
					$modalInstance.close($scope.selected);
				};
				$scope.cancel = function() {
					$modalInstance.dismiss('cancel');
				};
				$http.get('./data/treenav1.php')
					.success(function(data) {
						$scope.data = data.lists;
					});
					//左侧导航树数据类型2
                $http.get('./data/treenav1.php')
                    .success(function(data) {
                        $scope.treedata1 = data.lists;
                    });
                //表格初始化
                $http.get('./data/usecase.php')
                    .success(function(data) {
                        $scope.gridOptionsModal.data = data.lists;
                    });
                //表格初始化
                $scope.gridOptionsModal = {
                    enableRowSelection: true,
                    enableSelectAll: true,
                    selectionRowHeaderWidth: 40,
                    enableColumnResizing: true,
                    rowHeight: 30,
                    enableCellEdit: false,
                    paginationPageSizes: [10, 15, 20], //每页显示个数可选项
                    enableHorizontalScrollbar: 0, //grid水平滚动条是否显示, 0-不显示  1-显示
                    enableVerticalScrollbar: 0, //grid垂直滚动条是否显示, 0-不显示  1-显示
                    columnDefs: [{
                            field: 'num',
                            displayName: '序号',
                            width: '10%',
                            editableCellTemplate: 'ui-grid/dropdownEditor',
                            editDropdownRowEntityOptionsArrayPath: 'foo.bar[0].options',
                            editDropdownIdLabel: 'value',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                        {
                            field: "usecaseName",
                            displayName: '公司名称',
                            enableSorting: false,
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                            enableCellEdit: true, // 是否可编辑
                        },
                        {
                            field: "creater",
                            displayName: '公司地址',
                            enableColumnMenu: false, // 是否显示列头部菜单按钮
                        },
                    ],
                    data:[]
                };


                //用例执行情况js
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
                $scope.statewidth = 720;
                //是否显示不在当前时间范围内的用例
                $scope.showall=true;
                //是否是实时数据
                $scope.actualtime=false;
                //定义结束时间
                $scope.endtime = new Date('2017-9-18 16:42:00');
                $scope.endtimeString = Date.parse($scope.endtime);
                //定义开始时间
                $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                $scope.t = new Date('2017-9-18 16:52:00');
                $scope.ts = Date.parse($scope.t);
                //计算每秒占几px
                $scope.pxmin = $scope.statewidth / 3600 / $scope.timerange;
                //数据
                $http.get('./data/actuators.php')
                    .success(function(data) {
                        $scope.casedata = data.actuators;
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
                var findPot = function(timestring,defaultstring) {
                    if (timestring < defaultstring) {
                        var fp = turnmin(timestring, defaultstring) * $scope.pxmin;
                        return fp;
                    } else {
                        return 0;
                    };
                };
                //获取进度条左侧位置
                var findPot1 = function(timestring1,defaultstring) {
                    if (timestring1 < defaultstring) {
                        return 0;
                    } else {
                        var fp = turnmin(defaultstring, timestring1) * $scope.pxmin;
                        return fp;
                    }
                };
                //转换数据
                var returndata=function(data){
                    for(var i=0;i<data.length;i++){
                        var cases=data[i].cases;
                        for(var j=0;j<cases.length;j++){
                            cases[j].potleft=findPot1(cases[j].starttime,$scope.starttimeString);
                            cases[j].potright=findPot(cases[j].endtime,$scope.endtimeString);
                            var scripts=cases[j].scripts;
                            for(var k=0;k<scripts.length;k++){
                                if(cases[j].starttime<$scope.starttimeString){
                                    scripts[k].potleft=findPot1(scripts[k].starttime,$scope.starttimeString);
                                }else{
                                    scripts[k].potleft=findPot1(scripts[k].starttime,cases[j].starttime);
                                }
                                if(cases[j].endtime>$scope.endtimeString){
                                    scripts[k].potright=findPot(scripts[k].endtime,$scope.endtimeString);
                                }else{
                                    scripts[k].potright=findPot(scripts[k].endtime,cases[j].endtime);
                                }                               
                            }
                        }                       
                    };
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
                            return "#008bff";
                            break;
                        case "1":
                            return "#4caf50";
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
                    $http.get('./data/actuators.php')
                    .success(function(data) {
                        $scope.casedata = data.actuators;
                        returndata($scope.casedata);                   
                    });
                };
                //日期控件1
                $scope.inlineOptions = {
                    showWeeks: false,
                };
                $scope.format = "yyyy-MM-dd";
                $scope.popup1 = {
                    opened: false
                };

                $scope.open1 = function() {
                    $scope.popup1.opened = true;
                };
                //设置结束时间
                $scope.customtime={
                    "date":"2017-9-18",
                    "hour":11,
                    "min":12,
                    "sec":12
                };
                $scope.customtime.date=new Date("2017-9-18 12:00");
                $scope.customtime.hour=$scope.customtime.date.getHours();
                $scope.customtime.min=$scope.customtime.date.getMinutes();
                $scope.customtime.sec=$scope.customtime.date.getSeconds();
                //调整小时/分钟
                $scope.settime=function(timetype,dir){
                    if(dir=="up"){
                        if(timetype=="hour"){
                            if($scope.customtime.hour==23){
                                $scope.customtime.hour=00;
                            }else{
                                $scope.customtime.hour+=1;
                            }                            
                        }else if(timetype=="min"){
                            if($scope.customtime.min==59){
                                $scope.customtime.min=00;
                            }else{
                                $scope.customtime.min+=1;
                            }                            
                        }else if(timetype=="sec"){
                            if($scope.customtime.sec==59){
                                $scope.customtime.sec=00;
                            }else{
                                $scope.customtime.sec+=1;
                            }                            
                        }
                    }else if(dir=="down"){
                        if(timetype=="hour"){
                            if($scope.customtime.hour==0){
                                $scope.customtime.hour=23;
                            }else{
                                $scope.customtime.hour-=1;
                            }                            
                        }else if(timetype=="min"){
                            if($scope.customtime.min==0){
                                $scope.customtime.min=59;
                            }else{
                                $scope.customtime.min-=1;
                            }                            
                        }else if(timetype=="sec"){
                            if($scope.customtime.sec==0){
                                $scope.customtime.sec=59;
                            }else{
                                $scope.customtime.sec-=1;
                            }                            
                        }
                    }
                };
                //验证小时/分时间格式
                $scope.validateTime=function(){
                    if($scope.customtime.hour>23||$scope.customtime.hour==''){
                        $scope.customtime.hour=0;
                    }
                    if($scope.customtime.min>59||$scope.customtime.min==''){
                        $scope.customtime.min=0;
                    }
                };
                //设置自定义时间
                $scope.setvalidateTime=function(){
                    $scope.customtime.date.setHours($scope.customtime.hour);
                    $scope.customtime.date.setMinutes($scope.customtime.min);
                    $scope.customtime.date.setSeconds($scope.customtime.sec);
                    var customtimedate=Date.parse($scope.customtime.date);
                    if(customtimedate>$scope.endtimeString){
                        $scope.customtime.date=new Date($scope.endtimeString);
                        $scope.customtime.hour=$scope.customtime.date.getHours();
                        $scope.customtime.min=$scope.customtime.date.getMinutes();
                        $scope.customtime.sec=$scope.customtime.date.getSeconds();
                    }else{
                        $scope.endtimeString=customtimedate;
                        $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                        returndata($scope.casedata);
                    }
                };
                
                /*$scope.timer=$interval(function(){
                    updatedata();
                },1000);*/
                //关闭实时
                $scope.changeactual=function(){
                    if($scope.actualtime){
                        $interval.cancel($scope.timer);
                    }else{
                        $scope.endtime = new Date('2017-9-18 16:42:00');
                        $scope.endtimeString = Date.parse($scope.endtime);
                        //定义开始时间
                        $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);                      
                        $scope.timer=$interval(function(){
                            updatedata();
                        },1000);
                    }
                };
                //翻页
                $scope.changepage=function(type){
                    if(type=="before"){
                        $scope.endtimeString=$scope.endtimeString-1000*$scope.timerange*3600;
                        $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                        returndata($scope.casedata);
                    }if(type=="after"){
                        var tnow = new Date();
                        var tnowstring = Date.parse(tnow);
                        $scope.endtimeString=$scope.endtimeString+1000*$scope.timerange*3600;
                        $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                        if($scope.endtimeString>=tnowstring){
                            $scope.endtimeString=tnowstring;
                            $scope.starttimeString = beforeNowtime($scope.endtimeString,$scope.timerange);
                        };
                        returndata($scope.casedata);
                    }
                    
                };
                /*var year=date.getFullYear(); //获取当前年份
                var mon=date.getMonth()+1; //获取当前月份
                var da=date.getDate(); //获取当前日
                var day=date.getDay(); //获取当前星期几
                var h=date.getHours(); //获取小时
                var m=date.getMinutes(); //获取分钟
                var s=date.getSeconds(); //获取秒*/
			}
		])
})