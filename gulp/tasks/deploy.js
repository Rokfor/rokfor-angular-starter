'use strict';

import gulp from 'gulp';
import ftp  from 'vinyl-ftp';
import gutil from 'gulp-util';

gulp.task('deploy', ['prod'], function() {

  // Any deployment logic should go here
  var conn = ftp.create( {
          host:     'SERVER',
          user:     'USER',
          password: 'PASSWORD',
          parallel: 10,
          log:      gutil.log,
          secure:   true,
          secureOptions: {
            rejectUnauthorized: false
          },
          port: 21
      } );

      var globs = [
          'build/**'
      ];

      // using base = '.' will transfer everything to /public_html correctly
      // turn off buffering in gulp.src for best performance

      return gulp.src( globs, { base: 'build', buffer: false } )
          .pipe( conn.newer( '/web' ) ) // only upload newer files
          .pipe( conn.dest( '/web' ) );

});