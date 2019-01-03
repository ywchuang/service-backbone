# Service-backbone

Recommend to use *Visual Studio Code* to get the full benefit of the setup

node.js version `10.13.0` was using when create the project

Instal [docker](https://www.docker.com/ "docker site")

## Extensions for visual sudion code (optional but handy)

Jest, docker, docker exploer, TSLint, ESLint, EditorConfig

## Development

This project uses:

* [Serverless](https://serverless.com/framework/docs/providers/aws/guide/) lambda structure
* [Inversify.js](https://github.com/inversify/InversifyJS/blob/master/wiki/readme.md)  as main framwork to handle DI
* [TypeOrm](http://typeorm.io/#/)   for database mapping
* and [Jest](https://jestjs.io/docs/en/getting-started) for unit testing

TODO:
end to end tesing has not added in

Setup the project
> npm install

Start local databse
> npm run start-dev

Test
> npm test

Start serverless offline
> npm run local
