
// gulpfile.js - файл с "тасками" (задачами) для Gulp

'use strict';

var gulp       = require('gulp'),
mainBowerFiles = require('main-bower-files'),
watch          = require('gulp-watch'),
prefixer       = require('gulp-autoprefixer'), //Дописывает нужные префиксы префиксы 
sourcemaps     = require('gulp-sourcemaps'),
cssbeautify    = require("gulp-cssbeautify"), //Делает структуру css файлы красивым
sass           = require('gulp-sass'), //Компилирует sass в css 
imagemin       = require('gulp-tinypng'),
browserSync    = require("browser-sync"),
reload         = browserSync.reload;


// Общий объект с путями

var path = {
    vendor: {
        js: 'app/js/',
        css: 'app/css/'
    },
    dist: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'dist/',
        js: 'dist/js',
        scss: 'dist/css/',
        css: 'dist/css/',
        img: 'dist/img/',
        fonts: 'dist/fonts/',
        php: 'dist/'
    },
    app: { //Пути откуда брать исходники
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'app/js/**/*.js',//В стилях и скриптах нам понадобятся только main файлы
        scss: 'app/css/*.scss',
        css: 'app/css/**/*.css',
        img: 'app/img/**/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/fonts/**/*.*',
        php: 'app/**/*.php'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: 'app/**/*.html',
        js: 'app/js/**/*.js',
        scss: 'app/css/**/*.scss',
        css: 'app/css/**/*.css',
        img: 'app/img/**/**/*.*',
        fonts: 'app/fonts/**/*.*',
        php: 'app/**/*.php'
    },
    clean: './dist'
};



// Веб-сервер

var config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: false,
    host: 'localhost',
    port: 8081,
    logPrefix: "web-leo"
};

// Таски, которые помогут обработать файлы перед перемещением в /dist

gulp.task('html:build', function () {
    gulp.src(path.app.html) //Выберем файлы по нужному пути
        .pipe(gulp.dest(path.dist.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });

gulp.task('js:build', function () {
    gulp.src('app/js/main.js') //Найдем наш main файл
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
    });

gulp.task('scss:build', function () {
    gulp.src(path.app.scss) //Выберем наш main.scss
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cssbeautify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.scss)) //И в build
        .pipe(reload({stream: true}));
    });

// J2q5rYJpgZWYgDm0BCzZDrr900fF3FRC - leonid_xvan@mail.ru
// MyZ3Kg7LVTLnWWf9Nxs5JDqdc3bkJ4nM - leobrok@mail.ru
// lpM7jLP8WBCvVk5m50wpCgcK3pPDDTj9 - web-leo@bk.ru
gulp.task('image:build', function () {
    gulp.src(path.app.img) //Выберем наши картинки
        //.pipe(imagemin ( 'J2q5rYJpgZWYgDm0BCzZDrr900fF3FRC' ))
        .pipe(gulp.dest(path.dist.img)) //И бросим в build
    });

gulp.task('fonts:build', function() {
    gulp.src(path.app.fonts)
    .pipe(gulp.dest(path.dist.fonts))
});

gulp.task('css:build', function() {
    gulp.src(path.app.css)
    .pipe(prefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(path.dist.css))
});

gulp.task('js-libs:build', function() {
    gulp.src(path.app.js)
    .pipe(gulp.dest(path.dist.js))
});

gulp.task('php:build', function () {
    gulp.src(path.app.php) //Выберем файлы по нужному пути
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.php)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    });

// Общий таск с названием 'build', который будет запускать все написанное выше

gulp.task('build', [
    'js-libs:build',
    'html:build',
    'css:build',
    'js:build',
    'scss:build',
    'fonts:build',
    'image:build',
    'php:build'
    ]);



// Измения файлов в /app автоматически инициируются в наши прописанные таски

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
    watch([path.watch.scss], function(event, cb) {
      gulp.start('scss:build');
  });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js-libs:build');
    });
    watch([path.watch.img], function(event, cb) {
      gulp.start('image:build');
  });
    watch([path.watch.fonts], function(event, cb) {
      gulp.start('fonts:build');
  });
    watch([path.watch.php], function(event, cb) {
      gulp.start('php:build');
  });
});



// Локальный livereload-сервер

gulp.task('webserver', function () {
    browserSync(config);
});

// Команда для запуска

gulp.task('default', ['build', 'webserver', 'watch']);