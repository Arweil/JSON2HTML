module.exports = {
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        useBuiltIns: 'entry',
        modules: false,
        corejs: 3
      },
    ],
    [
      require.resolve('@babel/preset-react'),
      {
        development: process.env.NODE_ENV === 'development',
        useBuiltIns: true,
      },
    ],
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: 'antd',
        libraryDirectory: 'es', // default is lib
        style: true,
      },
      'antd',
    ],
    [
      require.resolve('babel-plugin-import'),
      {
        libraryName: 'lodash',
        libraryDirectory: '', // default is lib
        camel2DashComponentName: false,
      },
      'lodash',
    ]
  ],
};
