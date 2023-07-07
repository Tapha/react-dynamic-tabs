const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'reactDynamicTabsLib', // The name of the global variable used in browsers
    libraryTarget: 'umd', // This will compile your library to work with different module systems including AMD, CommonJS, and as global variable
    globalObject: 'this', // This ensures the UMD builds works in Node.js and browsers
    umdNamedDefine: true  // Will name the AMD module of the UMD build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
        }
      }
    ]
  },
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React' // Indicates global variable name in a browser
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM' // Indicates global variable name in a browser
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
