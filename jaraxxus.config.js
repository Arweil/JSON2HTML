module.exports = {
  entry: 'src/index.tsx',
  bundleAnalyzerReport: false,
  publicPath: `/JSON2HTML`,
  outputDir: 'docs',
  devServer: {
    publicPath: '/JSON2HTML',
    port: 9876,
    open: false,
  },
};
