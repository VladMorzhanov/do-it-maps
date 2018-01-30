# Do IT Maps

Simple application that works with 2Gis Maps API.

## Demo

https://do-it-maps.herokuapp.com/

## Installation

### Run dev server with HMR

1. npm i
2. add MONGO_URL to process.env variable
3. npm start

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
