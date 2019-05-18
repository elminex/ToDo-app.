const path = require('path');

module.exports = (env) => {
  const enviroment = env || 'production';
  return {
    mode: enviroment,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `app.${enviroment}.bundle.js`,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  };
};
