var gulp = require('gulp')
var watch = require('gulp-watch')
var notify = require('gulp-notify')
var svgSprite = require('gulp-svg-sprite')

const src = './resources/assets'
const dist = './public'

// IMAGES
// gulp.task('images', () => {
// 	const jpgFilter = filter('**/*.{jpg,jpeg}', {restore: true})
//
//   gulp.src(`${src}/images/optimize/*.{png,jpg,jpeg}`)
// 		// .pipe(imageOptim.optimize())
// 		.pipe(jpgFilter)
//     .pipe(imagemin([guetzli()]))
// 		.pipe(jpgFilter.restore)
// 		.pipe(gulp.dest(`${dist}/images`))
//     .pipe(clean())
// 		.pipe(notify({ message: '✔ Compressed with TinyPNG, ImageOptim and Guetzli', onLast: true }))
// })

// SVG SPRITE
const svgSpriteConfig = {
  shape: {
    spacing: {
      padding: 0
    },
    transform: ['svgo']
  },
  mode: {
    symbol: {
      dest: "./",
      sprite: `images/sprites/icons-sprite.svg`,
      inline: false,
      render: {
        scss: {
          dest: `../${src}/sass/svgsprite/_symbol-sprite.scss`,
          template: `${src}/sass/svgsprite/_symbol-template.scss`
        }
      }
    }
  },
  variables: {
    mapname: "icons"
  }
}

gulp.task('svgsprite', () =>
	gulp.src(`${src}/images/svgsprite/*.svg`)
		.pipe(svgSprite(svgSpriteConfig))
		.pipe(gulp.dest(dist))
		.pipe(notify({message: '✔ SVG Sprite finished'}))
)

// gulp.task('pngsprite', ['svgsprite'], () =>
// 	gulp.src(`${src}/images/sprite.svg`)
// 		.pipe(svg2png())
// 		.pipe(gulp.dest(`${dist}/img/`))
// 		.pipe(notify({message: '✔ PNG Sprite finished'}))
// )
