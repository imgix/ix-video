/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {babel} from '@rollup/plugin-babel';
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

const babelConfig = {
  // allowAllFormats: true,
  babelHelpers: 'runtime',
  presets: [
    [
      '@babel/preset-env',
      {
        // rollup will take care of transpiling module syntax
        modules: false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
  ],
};

const buildConfig = {
  minified: {
    // minified esm bundle
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
    // non-minified esm bundle
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
        'Reflect.decorate': 'undefined',
        'video.min.js': 'video.js',
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
  umd: {
    // minified umd bundle
    input: './src/elements/ix-video.ts',
    output: {
      dir: './dist/umd/',
      format: 'umd',
      name: 'ix-video.js',
      exports: 'named',
      sourcemap: true,
      // disable code splitting
      manualChunks: () => 'ix-video.js',
    },
    onwarn(warning) {
      if (warning.code !== 'THIS_IS_UNDEFINED') {
        console.error(`(!) ${warning.message}`);
      }
    },
    plugins: [
      replace({
        'Reflect.decorate': 'undefined',
        preventAssignment: true,
      }),
      ts(),
      resolve(),
      postcss(),
      postcssLit(),
      commonjs(),
      babel(babelConfig),
      summary(),
    ],
  },
};
console.log(
  `Building ix-video ${devMode ? 'development' : 'production'} bundle`
);
console.log(`Building video.js ${vjsBundleType} bundle`);

export default buildConfig[vjsBundleType];
