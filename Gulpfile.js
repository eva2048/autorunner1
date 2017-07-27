//引入插件
var gulp =require("gulp");
var livereload=require("livereload");

//执行任务，意思为监听src下的所有文件，发现有变动即刷新浏览器，根据自己的文件目录写监听的位置
gulp.task('watch', function() {
livereload.listen();
gulp.watch('app/**/*.*',function(file){
livereload.changed(file.path);
});
});