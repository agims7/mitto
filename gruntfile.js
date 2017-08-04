module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },

        watch: {
            scripts: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            my_target: {
                files: {
                    'js/app.min.js': 'js/app.js'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s)
    grunt.registerTask('default', ['watch']);
};