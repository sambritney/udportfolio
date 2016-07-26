module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // uglify: {
        //     build: {
        //         src: 'views/js/main.js',
        //         dest: 'views/js/main.min.js'
        //     }
        // },

        // imagemin: {
        //     dynamic: {
        //         files: [{
        //             expand: true,
        //             cwd: 'views/images/',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: 'views/images/build/'
        //         }]
        //     }
        // }

        critical: {
            generate: {
                options: {
                    base: './',
                    css: 'css/style.css',
                    width: 320,
                    height: 70
                },
                src: 'index.html',
                dest: 'generated/index-critical.html'
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-critical');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['critical']);

};