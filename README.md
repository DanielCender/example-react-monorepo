# Example Light React Monorepo

This sample repo illustrates the use of Lerna and Parcel to scaffold a simple React project. This example is assuming a backend using Serverless to deploy the built application to an S3 static site and delivered through a CloudFront distribution.

## Getting Started

Clone repo:

`git clone https://github.com/DanielCender/example-react-monorepo.git`

cd to root:

`cd example-react-monorepo`

Or cd into frontend:

`cd example-react-monorepo/packages/frontend`

#### Run sample in `DEV` mode:

Yarn:

`yarn dev`

NPM:

`npm run dev`

#### Build for production

Yarn:

`yarn build` or `npm run build`

Find output in the `dist/` folder.

### Prerequisites

TODO: What things you need to install the software and how to install them

```
Give examples
```

## Running the tests

TODO: Once I've sorted it out, `yarn test` will run all preliminary tests.

### And coding style tests

TODO: Will be using husky to implement git hooks.

## Deployment

TODO: Add additional notes about how to deploy this on a live system

## Built With

- [Lerna](https://lerna.js.org/) - Tool for managing multiple JS packages
- [Serverless](https://serverless.com/framework/docs/) - Serverless service configuration and deployment tool
- [React](https://reactjs.org/) - Front-end Framework

## Contributing

TODO: Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
