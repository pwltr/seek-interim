let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.autoload({
  'cash-dom': ['$'],
})

mix.js('resources/assets/js/main', 'public/js')
   .extract([
     'cash-dom',
     'imagesloaded',
     'svg4everybody',
     'vanilla-lazyload',
   ])

mix.sass('resources/assets/sass/main.scss', 'public/css');

if (mix.inProduction()) {
  mix.disableNotifications()
  mix.version()
} else {
  mix.sourceMaps()
  mix.browserSync('localhost:8000')
}
