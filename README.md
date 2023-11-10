This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and using below libraries:

- Typescript
- [TailwindCSS](https://tailwindcss.com/)
- [NextUI](https://nextui.org/)
- [react-hook-form](https://www.react-hook-form.com/) - form utility
- [Playwright](https://playwright.dev/) - Automated testing framwork

[![Node.js CI](https://github.com/chandrakantap/rjc-coding-challenge/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/chandrakantap/rjc-coding-challenge/actions/workflows/node.js.yml)

### Live Demo

Live demo available at [here](https://rjc-coding-challenge-7d6qghygv-chandrakanta-pals-projects.vercel.app/)

### Running in local

- run `yarn` to install the dependecies.
- run `yarn test:init` for postinstall initialization
- run `yarn dev` for starting app in local server.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Automated test case

This application using [Playwright](https://playwright.dev/) for autmated writing automated test case.

`yarn test:init` needs to run before executing any test case.

To execute test case, run `yarn test`

### With more time

- I would try to integrate the for with a payment gateway sandbox, like paypal etc.
- We could integrate with publick api for currency conversion.
- Will try to create a github-action to run the automated testcase.

### Assumptions

- User will submit exact USD and INR value in form and currency conversion is required.
- Tried to make the app responsive.
