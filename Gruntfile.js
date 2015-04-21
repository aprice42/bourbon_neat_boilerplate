module.exports = function(grunt) {
  grunt.initConfig({

    // Define sass task
    sass: {

      // Define development setting for sass task
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/app-dev.css': 'css/app.sass',
        }
      },

      // Define production setting for sass task
      prod: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/app.css': 'css/app.sass',
        }
      }
    }, // end sass task

    // Define watch task
    watch: {

      // Define html setting for watch task
      html: {
        // Look at index and primary css file
        files: ['index.html', 'css/app.css'],

        // Define the live reload option to refresh the browser on change
        options: {
          livereload: true,
        },
      },

      // Define css setting for watch task
      css: {
        // Watch the sass directory for any files
        files: ['sass/**/**'],
        // If change detected, run sass task
        tasks: ['sass']
      }
    }, // end watch task
  });

  // Include required grunt task files
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Set the default grunt task to run tasks
  grunt.registerTask('default', ['sass', 'watch']);

}
