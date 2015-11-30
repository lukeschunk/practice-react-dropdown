var gulp = require('gulp'); //build process
var gutil = require('gulp-util'); //console logs output of our build process - debugging
var source = require('vinyl-source-stream'); //handles our text files from one part of build process to another
var browserify = require('browserify'); //figures out dependancies
var watchify = require('watchify'); //tool that automatically reruns our gulp file for us whenever we change code
var reactify = require('reactify'); //actually execute our build

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

//this build function below is saying to bundle things.
  function build(file) {
    if(file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'browserify error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'))

  };
  build() //runs the build function
  bundler.on('update', build)
});







// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');
//
//
//
// gulp.task('default', function(){
//   return gulp.src('src/**') //go into the src directory and grab every file
//     .pipe(react()) //turn all files from jsx to js
//     .pipe(concat('application.js')) //combine each js file that we now have and combine them all into a file called application.js
//     .pipe(gulp.dest('./')) //and save it in our directory
// })
