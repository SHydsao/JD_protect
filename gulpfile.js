let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");
let connect = require('gulp-connect');
let sass = require("gulp-sass");
let uglify = require("gulp-uglify");
let babel = require('gulp-babel');
let rename = require("gulp-rename");


// 监听任务
gulp.task("default", async ()=>{
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
    gulp.watch("./src/jd/php/**/*",async ()=>{
        gulp.src("./src/jd/php/**/*")
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\php"));
    });
    //压缩js 并 将ES6转ES5
    gulp.watch(["./src/jd/js/**/*","!./src/jd/js/jquery-3.2.1.min"],async ()=>{
        gulp.src("./src/jd/js/**/*")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\js"));
    });
    //sass编译 
    gulp.watch("./src/jd/sass/*.scss",async ()=>{
       gulp.src("./src/jd/sass/*.scss")
       .pipe(sass())
       .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\JD-project\\css"));
    });
});   

