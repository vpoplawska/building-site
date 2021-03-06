var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
cssMixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, cssMixins, cssvars, nested, hexrgba, autoprefixer]))
      .on('error',function(err){
        console.log(err.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('./app/temp/styles'));
  });