var path = require('path');

module.exports = {
  entry: {
    main: [
      './app/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    pathinfo: true
  },
  resolve: {
    root: [ __dirname ]
  },
  module: {
    loaders: [{
      test: require.resolve('jquery'),
      loader: 'expose?$!expose?jQuery'
    }, {
      test: /\.js$/,
      include: path.join(__dirname, 'includes'),
      loader: 'script'
    }]
  }

};
