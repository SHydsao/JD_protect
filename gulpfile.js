let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let connect = require('gulp-connect');
let sass = require("gulp-sass");
let uglify = require("gulp-uglify");
let babel = require('gulp-babel');
let rename = require("gulp-rename");


// 监听任务
gulp.task("watchall", async ()=>{
    //压缩html的    
    gulp.watch("./src/jd/html/*.html",async ()=>{
        gulp.src("./src/jd/html/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\html"));
    });
    gulp.watch("./src/jd/images/**/*",async ()=>{
        gulp.src("./src/jd/images/**/*")
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\images"));
    });
    gulp.watch("./src/jd/icon/**/*",async ()=>{
        gulp.src("./src/jd/icon/**/*")
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\icon"));
    });
    //sass编译 
    gulp.watch("./src/jd/css/*.scss",async ()=>{
       gulp.src("./src/jd/css/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\css"));
    });
});   

