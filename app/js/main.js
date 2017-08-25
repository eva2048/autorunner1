require.config({
	baseUrl: 'lib',
	paths: {
		'app': 'app',
		'jquery': 'jquery-1.10.2.min',
		'angular': 'angular.min',
		'angular-animate':'angular-animate.min',
		'bootstrap':'bootstrap.min',
		'router': 'angular-ui-router.min',
		'ui-bootstrap-tpls':'ui-bootstrap-tpls.min',
		'angular-ui-tree':'angular-ui-tree.min',
		'angular-resizable':'angular-resizable',
		'ui-grid':'ui-grid',
		'highstock':'highstock.src',
		'exporting':'exporting.src',
		'highcharts-ng':'highcharts-ng'
	},
	shim: {
		'angular': {
			exports: 'angular',
		},
		'ui-bootstrap-tpls':{
			deps: ['angular']
		},
		'angular-animate':{
			deps: ['angular']
		},
		'angular-resizable':{
			deps: ['angular']
		},
		'angular-ui-tree':{
			deps: ['angular']
		},
		'ui-grid':{
			deps: ['angular']
		},
		'router': {
			deps: ['angular']
		},
		'app': {
			deps: ['router']
		},
		'bootstrap':{
			deps:['jquery']
		},
		'exporting':{
			deps:['highstock']
		},
		deps:['angular'],
		urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
	}
})
// 初始化myModule模块
require(['angular','app','jquery','polyfill','bootstrap','ui-bootstrap-tpls','angular-animate','angular-ui-tree','angular-resizable','bootstrap-datetimepicker','time-ng','ui-grid','polyfill','es5-sham','es5-shim','highstock','exporting','highcharts-ng'],function(){
	angular.bootstrap(document, ['myModule']);
})