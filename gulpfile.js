var gulp = require("gulp");
var sass = require ("gulp-sass");
gulp.task ("compilar-css", function(){
	return gulp.src("./source/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("./dist/css"))
});