const path    = require('path');
const mix     = require('laravel-mix');
const pkg     = require('./package.json');
const webpack = require('webpack');

const public  = 'dist';
const banner  = `${pkg.name}
${pkg.description}\n
@version v${pkg.version}
@author ${pkg.author}
@homepage ${pkg.homepage}
@repository ${pkg.repository.url}`;

mix.setPublicPath(path.normalize(public));

const config = {
  externals: {
    'jquery': 'jQuery',
    'grapesjs': 'grapesjs',
    'gjs-plugin-ckeditor': 'gjs-plugin-ckeditor',
    'grapesjs-plugin-ckeditor': 'grapesjs-plugin-ckeditor'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx,js)$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'eslint-loader',
        options: {
          fix: false,
          cache: false,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    library: 'grapesjs-components-farmer',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    inline: true,
    quiet: false
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ],
  devtool: 'source-map'
};

mix.webpackConfig(config).sourceMaps();

if (mix.inProduction()) {
  mix.js(`src/index.js`, `${ public }`);
  mix.version();
  mix.disableNotifications();
} else {
  mix.js(`example/index.js`, `${ public }/app`);
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

