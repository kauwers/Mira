module.exports = function(grunt) {
	require("time-grunt")(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		eslint: {
			options: {
				configFile: ".eslintrc.json"
			},
			target: ["js/*.js", "modules/default/*.js", "serveronly/*.js", "*.js"]
		},
		stylelint: {
			simple: {
				options: {
					configFile: ".stylelintrc"
				},
				src: ["css/main.css", "modules/default/calendar/calendar.css", "modules/default/clock/clock_styles.css", "modules/default/currentweather/currentweather.css", "modules/default/weatherforcast/weatherforcast.css"]
			}
		},
		jsonlint: {
			main: {
				src: ["package.json", ".eslintrc.json", ".stylelint"],
				options: {
					reporter: "jshint"
				}
			}
		},
		markdownlint: {
			all: {
				options: {
					config: {
						"default": true,
						"line-length": false,
						"blanks-around-headers": false,
						"no-duplicate-header": false,
						"no-inline-html": false,
						"MD010": false,
						"MD001": false,
						"MD031": false,
						"MD040": false,
						"MD002": false,
						"MD029": false,
						"MD041": false,
						"MD032": false,
						"MD036": false,
						"MD037": false,
						"MD009": false,
						"MD018": false,
						"MD012": false,
						"MD026": false,
						"MD036": false,
						"MD038": false
					}
				},
				src: ["README.md", "CHANGELOG.md", "LICENSE.md", "modules/README.md", "modules/default/**/*.md", "!modules/default/calendar/vendor/ical.js/readme.md"]
			}
		},
		yamllint: {
			all: [".travis.yml"]
		}
	});
	grunt.loadNpmTasks("grunt-eslint");
	grunt.loadNpmTasks("grunt-stylelint");
	grunt.loadNpmTasks("grunt-jsonlint");
	grunt.loadNpmTasks("grunt-yamllint");
	grunt.loadNpmTasks("grunt-markdownlint");
	grunt.registerTask("default", ["eslint", "stylelint", "jsonlint", "markdownlint", "yamllint"]);
};