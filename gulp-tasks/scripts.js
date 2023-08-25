"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";
import fileinclude from "gulp-file-include";

const argv = yargs.argv,
    production = !!argv.production;


gulp.task("scripts", () => {
    return gulp.src(paths.scripts.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulpif(production, rename({
            suffix: ".min"
        })))
        .pipe(gulp.dest(paths.scripts.dist))
        .pipe(debug({
            "title": "JS files"
        }))
        .pipe(browsersync.stream());
});



gulp.task("jsons", () => {
    return gulp.src(paths.jsons.src)

        .pipe(gulp.dest(paths.jsons.dist))
        .pipe(debug({
            "title": "jsons files"
        }))
        .pipe(browsersync.stream());
});