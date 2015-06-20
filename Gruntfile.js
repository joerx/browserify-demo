module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'public/output.js': ['public/index.js']
        },
        options: {
          transform: ['babelify', 'reactify']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('make', ['browserify']);
}
