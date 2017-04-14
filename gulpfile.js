var gulp = require("gulp");
var sass = require("gulp-sass");
var watch = require("gulp-watch");
//Commencer la tâche "styles"

gulp.task("styles", function() {
    gulp.src("sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./site-publique/css/"));
});

//Tâche par défaut

gulp.task("default", function() {
    gulp.watch("sass/*.scss", ["styles"]);
});