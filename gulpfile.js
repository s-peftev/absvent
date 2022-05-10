// Gulp
import gulp from 'gulp';
// Project paths
import path from './gulp/config/path.js';
// Common plugins import
import plugins from './gulp/config/plugins.js';
// Tasks import
import copy from './gulp/tasks/copy.js';
import reset from './gulp/tasks/reset.js';
import html from './gulp/tasks/html.js';
import scss from './gulp/tasks/scss.js';
import js from './gulp/tasks/js.js';
import images from './gulp/tasks/images.js';
import server from './gulp/tasks/server.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import svgSprite from './gulp/tasks/svg-sprite.js';
import zip from './gulp/tasks/zip.js';
import ftp from './gulp/tasks/ftp.js';

// Export gulp app for tasks
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins,
};

// Watch changes in files
const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};

// Gulp scenarios
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images, copy, svgSprite));
const develop = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// Default scenario
gulp.task('default', develop);

// Scenarios export
export {
  svgSprite, develop, build, deployZIP, deployFTP,
};
