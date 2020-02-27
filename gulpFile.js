var gulp = require("gulp"),
  sass = require("gulp-sass"),
  rename = require("gulp-rename"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cssnano = require("gulp-cssnano");

gulp.task("copylib", function() {
  return gulp
    .src(["app/scss/fonts.css", "app/scss/settings.css"])
    .pipe(gulp.dest("app/css"));
});

gulp.task("scss", function() {
  return gulp
    .src("app/scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("css-libs", function() {
  return gulp
    .src([
      "node_modules/normalize.css/normalize.css"
      /* "app/scss/fonts.css",
      "app/scss/settings.css"*/
    ])
    .pipe(concat("libs.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("code", function() {
  return gulp.src("app/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function() {
  return gulp
    .src(["app/js/js.js", "app/js/libs.min.js"])
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task("scripts", function() {
  return gulp
    .src([
      "./node_modules/jquery/dist/jquery.min.js",
      "./node_modules/slick-carousel/slick/slick.min.js"
    ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./app/js"));
});

gulp.task("watch", function() {
  gulp.watch("app/scss/**/*.scss", gulp.parallel("scss"));
  gulp.watch("app/scss/*.css", gulp.parallel("css-libs"));
  gulp.watch("app/*.html", gulp.parallel("code"));
  gulp.watch(["app/js/js.js", "app/js/libs.min.js"], gulp.parallel("script"));
});

gulp.task(
  "default",
  gulp.parallel(
    "css-libs",
    "copylib",
    "scss",
    "script",
    "browser-sync",
    "watch"
  )
);
