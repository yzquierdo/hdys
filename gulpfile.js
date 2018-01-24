//引入gulp
const gulp = require("gulp");

/*
    <1>html
*/
gulp.task("copy-html", () => {
    return gulp.src("html/*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})

/*
    2)images
*/
gulp.task("images", () => {
    return gulp.src("images/**/*").pipe(gulp.dest("dist/images")).pipe(connect.reload());
})

/*
    3)sass 转成css
    生成min.css  .css
    gulp-scss/gulp-sass-china    gulp-minify-css   gulp-rename
*/
const scss = require("gulp-sass-china");
const minify = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scss-index", () => {
    return gulp.src("scss/index.scss").pipe(scss()).pipe(gulp.dest("dist/css")).pipe(minify()).pipe(rename("index.min.css")).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})
gulp.task("scss-login", () => {
    return gulp.src("scss/login.scss").pipe(scss()).pipe(gulp.dest("dist/css")).pipe(minify()).pipe(rename("login.min.css")).pipe(gulp.dest("dist/css")).pipe(connect.reload());
})


/*
    4)js
*/
gulp.task("scripts", () => {
    return gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
})

/*
    5)data
*/
gulp.task("data", () => {
    gulp.src("data/*.json").pipe(gulp.dest("dist/data"));
})

/*
    6)整体执行
*/
gulp.task("build", ["copy-html", "images", "scss-index" , "scss-login", "scripts", "data"], () => {
    console.log("编译成功");
})

/*
    7)gulp监听
*/
gulp.task("watch", () => {
    gulp.watch("html/*.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("scss/login.scss", ["scss-login"]);
    gulp.watch("scss/index.scss", ["scss-index"]);
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("data/*.json", ["data"]);
})

/*
    8)启动服务器
    gulp-connect
    给每个后面添加 .pipe(connect.reload());
*/
const connect = require("gulp-connect");

gulp.task("server", () => {
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true  //自动刷新
    })
})

/*
    执行默认程序
*/
gulp.task("default", ["watch", "server"]);