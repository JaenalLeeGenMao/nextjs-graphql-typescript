# Next js + GraphQL + TypeScript Setup

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unit testing

I am using cypress to automate and instrument the coverage on the fly.

- npm run e2e

Run this under your terminal, after finish the test coverage

```bash
# better code visual
open coverage/lcov-report/index.html
# or summary
npx nyc report --reporter=text-summary --check-coverage --statements 100
```

You should see something similar to this in your terminal,

```
=============== Coverage summary ===============
Statements : 100% ( 10/10 )
Branches : 100% ( 6/6 )
Functions : 100% ( 5/5 )
Lines : 100% ( 9/9 )
================================================
```

## Things to watchout

Follow this to instrumented the coverage as we run [cypress](https://github.com/bahmutov/next-and-cypress-example)  
Learn to create this template [here](https://ivanms1.hashnode.dev/next-js-graphql-typescript-setup-ckdz9l83l00ey4us1gettgqy0)

## Tech stack

- Next.js
- Graphql
- Cypress
- Typescript
- Javascript
