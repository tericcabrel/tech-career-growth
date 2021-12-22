## Core web application

### Prerequisites
- Node 14+
- NPM or Yarn

### Setup
```shell
yarn install
cp .env.template .env.development.local
```

### Start the project for development
```shell
yarn dev
```
Open `http://localhost:5800` with your browser to see the result.

### Run unit tests
```shell
yarn test
```

### Scripts
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
