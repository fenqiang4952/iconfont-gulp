var gulp = require("gulp"),
  iconfont = require('gulp-iconfont'),
  _ = require('lodash'),
  consolidate = require('gulp-consolidate')

//构建图标字体
gulp.task('default', function () {
  var fontname = 'gd-icon'
  return gulp.src('src/icon/*.svg')
    .pipe(iconfont({
      fontName: fontname,
      formats: ['ttf', 'eot', 'woff', 'svg']
    }))
    .on('glyphs', function (glyphs, option) {
      // 将 icon 集写入 icon 索引 scss 文件
      gulp.src('src/cssTmpl/*.scss')
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontname: fontname,
          fontfamily: 'gd-icon',
          fontclass: 'gd-icon',
          version: 'v1.0.0',
          static_font_path: './scss/font'
        }))
        .pipe(gulp.dest('dist/scss'))
    })
    .pipe(gulp.dest('dist/font'))
})