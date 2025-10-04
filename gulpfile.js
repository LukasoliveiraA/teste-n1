import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import imagemin from "gulp-imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import newer from "gulp-newer";

const sass = gulpSass(dartSass);

// Compilar SASS -> CSS
function compilaSass() {
  return gulp
    .src("assets/styles/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"));
}

// Processar JS
function compilaJs() {
  return (
    gulp
      .src("assets/js/**/*.js")
      .pipe(concat("main.js"))
      // .pipe(uglify()) // descomentar se quiser minificar
      .pipe(gulp.dest("build/js"))
  );
}

// Copiar imagens (sem corromper)

function copiaImagens() {
  return gulp
    .src("assets/images/**/*")
    .pipe(newer("build/images/"))
    .pipe(imagemin({ progressive: true }))
    .pipe(gulp.dest("build/images/"));
}

// Watcher
function watch() {
  gulp.watch("assets/styles/scss/**/*.scss", compilaSass);
  gulp.watch("assets/js/**/*.js", compilaJs);
  gulp.watch(
    "assets/images/**/*.{png,jpg,jpeg,gif,svg}",
    gulp.series(copiaImagens)
  );
}

// Task default
gulp.task(
  "default",
  gulp.series(gulp.parallel(compilaSass, compilaJs, copiaImagens), watch)
);
