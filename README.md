
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## validateのインストール
$ npm i --save class-validator class-transformer

## mongDBにconnectする(nestjs用)
$ npm install --save mongoose @nestjs/mongoose

## .envファイルを使用できるようにする
$ npm i --save @nestjs/config

## mongooseの型定義ファイルの作成
npm i --save-dev @types/mongoose

## jwtトークンのためのモジュールをインストールする
nest g module auth
nest g controller auth --no-spec
nest g service auth --no-spec

## jwtトークンを作成する
$ npm install --save @nestjs/jwt

## passwordをハッシュ化する
$ npm install --save bcryptjs
$ npm install --save-dev @types/bcryptjs

## jwtトークンを復号して照合する
npm install @nestjs/passport passport-jwt
npm install passport

## 型定義ファイルのインストール
npm install --save-dev @types/passport-jwt