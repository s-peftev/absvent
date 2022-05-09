import webpack from "webpack-stream";

export default () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error: <%= error.message %>',
            })
        ))
        .pipe(webpack({
            mode: app.isDev ? 'development' : 'production',
            output: {
                filename: 'app.min.js',
            },
            module: {
                rules: [
                  {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    },
                  }
                ]
              }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}