import replace from 'gulp-replace'; // search and replace
import plumber from 'gulp-plumber'; // errors handle
import notify from 'gulp-notify'; // hints
import browserSync from 'browser-sync'; // web serve
import newer from 'gulp-newer'; // actual update check
import gulpIf from 'gulp-if'; // gulp conditions

export default {
  replace,
  plumber,
  notify,
  browserSync,
  newer,
  if: gulpIf,
};
