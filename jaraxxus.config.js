global.__NODE_ENV__ = process.env.NODE_ENV; // development | production

const path = require('path');

const localhostPort = 4000;

const jaraxxusConfig = {
  entry: {
    main: ['src/index.tsx']
  },
  indexPath: 'public/index.html',
  needPolyfill: true,
  publicPath: `/`,
  assetsDir: 'static',
  outputDir: 'docs',
  srcDir: 'src', // 开发目录
  eslintConfigFile: undefined, // eslint.rules.js为根目录文件
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    },
    optimization: {},
  },
  bundleAnalyzerReport: false,
  devServer: {
    port: localhostPort,
  },
  css: {
    extract: false,
    cssModules: false,
    sourceMap: false,
  }
};

if (global.__NODE_ENV__ === 'production') {
  jaraxxusConfig.configureWebpack.optimization.splitChunks = {
    chunks: 'all',
    cacheGroups: {
      vender: {
        name: 'vender',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
      }
    }
  };
}

module.exports = jaraxxusConfig;
