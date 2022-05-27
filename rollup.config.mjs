/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import process from 'process';
import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';
import summary from 'rollup-plugin-summary';
import {terser} from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

const devMode = process.env.NODE_ENV === 'development';
const vjsBundleType = process.env.VJS_BUNDLE_TYPE || 'esm';

const buildConfig = {
  minified: {
    // minified bundle
    input: './src/elements/ix-video.ts',
    output: {
      dir: './dist/min/',
      format: 'esm',
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      ts(),
      replace({
        'Reflect.decorate': 'undefined',
        'process.env.VJS_BUNDLE_TYPE': JSON.stringify(vjsBundleType),
        preventAssignment: true,
      }),
      resolve(),
      postcss(),
      postcssLit(),
      // Minify JS
      terser({
        ecma: 2020,
        module: true,
        warnings: true,
      }),
      commonjs(),
      summary(),
    ],
  },
  esm: {
    // non-minified bundle
    input: './src/elements/ix-video.ts',
    output: {
      dir: './dist/esm/',
      format: 'esm',
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      replace({
        'video.js/dist/video.min.js': 'video.js',
        preventAssignment: true,
      }),
      ts(),
      resolve(),
      postcss(),
      postcssLit(),
      commonjs(),
      summary(),
    ],
  },
};
console.log(
  `Building ix-video ${devMode ? 'development' : 'production'} bundle`
);
console.log(`Building video.js ${vjsBundleType} bundle`);

export default buildConfig[vjsBundleType];
