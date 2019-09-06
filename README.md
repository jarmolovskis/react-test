# react-test

npm install create-react-app -g

create-react-app react-assigment --scripts-version 1.1.5

npm install --save radium

npm run eject

npm start


webpack.config.js

{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]'
  }),
}
