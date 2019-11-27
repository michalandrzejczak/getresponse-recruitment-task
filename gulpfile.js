const gulp         = require('gulp');
const sass         = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat       = require('gulp-concat');
const babel        = require('gulp-babel');
const rename       = require('gulp-rename');
const browserify   = require('gulp-browserify');
const runSequence  = require('run-sequence');
const uglify       = require('gulp-uglify');

gulp.task('clean', () =>
    gulp.src('./dist', {
        read: false,
    })
    .pipe(clean({
        force: true,
    })),
);

gulp.task('buildcss', () => {
    gulp.src('./src/scss/**/*');
    return sass('./src/scss/**/*').on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:  false,
    }))
    .pipe(rename('styles.bundle.css'))
    .pipe(gulp.dest('./src'))
});

gulp.task('buildjs', () =>
    gulp.src('./src/js/**/*')
    .pipe(concat('scripts.bundle.js'))
    .pipe(babel({
        presets: ['env'],
    }))
    .pipe(browserify({
        insertGlobals: true,
        debug:         !gulp.env.production,
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
    .on('error', function (e) {
        console.error(e);
        this.emit('end');
    }),
);

gulp.task('copyImages', () =>
    gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img')),
);

gulp.task('build', () =>
    runSequence(
        'buildcss',
        'buildjs',
        'copyImages',
    ),
);

gulp.task('watch', () => {
    gulp.watch('./src/scss/**/*', ['buildcss']);
    gulp.watch('./src/js/**/*', ['buildjs']);
    gulp.watch('./src/img/**/*', ['copyImages']);
});

gulp.task('default', ['build', 'watch']);