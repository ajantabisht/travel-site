var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default',function(){
    console.log('horray you created a gulp task.');
});

gulp.task('html',function(){
console.log('imagen someting usefull to be done to yout HTML');
});

gulp.task('styles',function(){
    console.log('image post css task running ');
    });

gulp.task ('watch', function(){

    watch('./app/index.html', function(){

        gulp.start('html');
    })

    watch('./app/assets/styles/*.css', function(){

        gulp.start('styles');
    })
});