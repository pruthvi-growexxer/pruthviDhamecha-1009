const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

// gulp.task('clean', () => {
//     return del([
//         './assets/css/style.css',
//     ]);
// });

// gulp.task('default', gulp.series(['clean', 'styles']));
gulp.task('default', gulp.series(['styles']));