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
		'angular-resizable':'angular-resizable'
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
		'router': {
			deps: ['angular']
		},
		'app': {
			deps: ['router']
		},
		'bootstrap':{
			deps:['jquery']
		},
		deps:['angular'],
		urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
	}
})
// 初始化myModule模块
require(['angular','app','jquery','bootstrap','ui-bootstrap-tpls','angular-animate','angular-ui-tree','angular-resizable'],function(){
	angular.bootstrap(document, ['myModule']);
})