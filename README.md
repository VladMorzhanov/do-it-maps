# Do IT Maps

Simple application that works with 2Gis Maps API.

## Demo

https://do-it-maps.herokuapp.com/

## Installation

### Run dev server with HMR

1. npm i
2. create Facebook and Google API key into Auth component
3. add MONGO_URL to process.env variable
4. npm start

### Run production

1. npm i
2. npm run build
3. add MONGO_URL to process.env variable
4. npm start:prod

### Deploy on Heroku (remove build folder from .gitignore)

1. create app on Heroku
2. add MONGO_URL to Settings/vars
3. heroku login
4. heroku git:remote -a do-it-maps
5. heroku ps:scale web=1
6. git push heroku master

## Main technologies and libraries

- <a href="https://reactjs.org/">React</a>
- <a href="https://redux.js.org/">Redux</a>
- <a href="https://github.com/redux-saga/redux-saga">Redux Saga</a>
- <a href="https://github.com/reduxjs/reselect">Reselect</a>
- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://expressjs.com/">ExpressJS</a>
- <a href="https://www.mongodb.com/">MongoDB</a>
- <a href="https://www.styled-components.com/">Styled components</a>
- <a href="https://webpack.js.org/">Webpack 4</a>
- <a href="https://eslint.org/">ESLint</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://babeljs.io/">Babel</a>
- <a href="https://sass-lang.com/">Sass</a>

## Author

Vlad Morzhanov

## License

#### (The MIT License)

Copyright (c) 2018 Vlad Morzhanov.
You can review license in the LICENSE file.
