# PROJECT - BATTLEBORN

## Requirements

The project uses Gulp to run tasks (detailed below); start by installing the gulp.js Command Line Interface globally on your machine.

npm install -g gulp


### Gulp

This project base uses Gulp to serve, build and watch project files in development. For this purpose we installed some plugins to automate and enhance our workflow.  

   
##Gulp plugins

A list of the plugins used by Gulp and what they're used for.

#gulp-uglufy

Minifies all .js files.

#gulp-sass

Gulp Sass for compiling Sass into CSS.

#gulp-watch

Gulp watch watches for changes to file content and then executes gulp tasks when a change is detected. Watch is useful for tasks like continuous unit testing (every time you save a file, that new file is tested), refreshing your browser automatically when changes are reflected, or compiling preprocessing languages like Sass or Jade into CSS or HTML.

#gulp-rename

provides simple file renaming methods.

#gulp-plumber

Prevent pipe breaking caused by errors from gulp plugins

#browser-sync

Keep multiple browsers & devices in sync when building websites.

#gulp-imageoptim

Gulp plugin to optimize images using imageoptim and jpegmini


Directory structure

```
app/
 |__assets/
 |   |__css/
 |   |__fonts/
 |   |__img/
 |   |__js/
 |__images/
 |   |__index.html
 |__sass/
 |   |__index.html
 ```



