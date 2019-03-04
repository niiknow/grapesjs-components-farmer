const path   = require('path');
const mix    = require('laravel-mix');
const public = mix.inProduction() ? 'dist' : 'example';

mix.setPublicPath(path.normalize(public));

const config = {
  externals: {
    'jquery': 'jQuery',
    'grapesjs': 'grapesjs',
    'dot': 'doT',
    'gjs-plugin-ckeditor': 'gjs-plugin-ckeditor',
    'grapesjs-plugin-ckeditor': 'grapesjs-plugin-ckeditor'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx,js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          fix: false,
          cache: false,
          formatter: require('eslint-friendly-formatter')
        }
      }
    ]
  },
  output: {
    path: path.resolve(public),
    filename: 'index.js',
    library: 'grapesjs-components-farmer',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    inline: true,
    quiet: false
  },
  devtool: 'source-map'
};

mix.webpackConfig(config).sourceMaps();

if (mix.inProduction()) {
  mix.js(`src/index.js`, `${ public }`);
  mix.version();
  mix.disableNotifications();
} else {
  mix.js(`example/app.js`, `${ public }`);
  mix.browserSync({
    proxy: false,
    port: 3000,
    files: [
      'src/*',
      'example/*'
    ],
    browser: 'firefox',
    open: 'local',
    server: {
      baseDir: './'
    }
  });
}

