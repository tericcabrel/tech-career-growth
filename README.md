# Tech Career Growth Navigator
A web application that allows developers to find useful resources for their growth in tech.

<div>
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=1d4ed8&labelColor=fff" alt="PRs welcome!" />
  <img src="https://img.shields.io/github/license/tericcabrel/tech-career-growth-navigator?label=License&message=License&color=1d4ed8&labelColor=fff" alt="License" />
</div>
<br>

[![Website](https://techcareergrowth.co/assets/og.png)](https://techcareergrowth.co)

## Features
- **Find a tech resource - You can request resources to:**
  - Improve your resume
  - Be better at interviewing
  - Move up the career ladder
  - Improve your productivity
  - Build good side projects
  - Grow your skill and learn a tech
  - Compensation


- **Request a resource**: If there is no result for the resource you are searching for,
you can request the resource and you will notified when the resource is available.

### Prerequisites
- Node 14+
- NPM or Yarn

### Setup
```shell
yarn install
cp .env.template .env
# open .env file and update it with your local environment configuration
nano .env
```

### Generate Prisma types and seed the database with default data
```shell
yarn db:generate
yarn db:migrate
yarn db:seed
```

### Start the project for development
This project uses Planetscale for database and to connect to it locally, there is a command to run before starting the application
```shell
# On a terminal
yarn db:dev
# On a second terminal and only necesseray if you update the prisma schema
yarn db:shadow
# On another terminal
yarn dev
```
Open `http://localhost:5800` with your browser to see the result.

### Run unit tests
```shell
yarn test
```

## Scripts
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type:check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

## How to contribute

- Create an issue where you explain clearly the problem you want to solve
- Make a Pull Request
- If it's relevant, we're going to merge it.
  Yeah, it's simple as this!


## License

- [LICENSE: MIT](/LICENSE)
