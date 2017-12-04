const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const watch         = require('gulp-watch');


gulp.task('sass-compile', () => {
    return gulp.src('./src/styles/**/*.scss')
           .pipe(sourcemaps.init()) 
           .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
           .pipe(sourcemaps.write('./')) 
           .pipe(gulp.dest('./build/styles/')) 
})

gulp.task('watch', () =>{
    gulp.watch('./src/styles/**/*.scss', ['sass-compile'])
})