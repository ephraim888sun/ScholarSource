## Project Overview

ScholarSource is a cutting-edge solution in the field of education technology. It uses next-generation blockchain contracts (with the hope of later supporting zero-knowledge proofs through Aleo) to ensure security when crowdfunding educational scholarhips for underserved students across the world. While our product is still in its early stages, ScholarSource promises an exciting new educational future for those who need it most.

## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-javascript-starter
```

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

On `pages/_app.js`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

## Environment Variables

To run this project, you will need to add environment variables. Check the `.env.example` file for all the environment variables required and add it to `.env.local` file or set them up on your hosting provider.

## Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb JavaScript Documentation](https://docs.thirdweb.com/react) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com/react) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Templates](https://thirdweb.com/templates)

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Aleo Tokens

In future iterations of our app we wish to support zero-knowledge blockchain technology with the power of Aleo. A demo of this mechanism is included in the leo_token folder, which can be deployed by running 'bash ./deploy.sh' from the command line. Aleo technology is still in very early stages so we have not yet been able to integrate it with our frontend system; however, the app could
eventually support more secure transactions by using transfers of Aleo tokens rather than Solidity contracts when funding grants.
