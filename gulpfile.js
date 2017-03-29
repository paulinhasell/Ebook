//compilar e gerar css a partir do scss
var gulp = require("gulp");
var sass = require ("gulp-sass");
gulp.task ("compilar-css", function(){
	return gulp.src("./source/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./dist/css"))
});
//monitorar e atualizar atomaticamente alteracoes
gulp.task ("escuta-me", function(){
	gulp.watch("./source/scss/*.scss",["compilar-css"]);
});