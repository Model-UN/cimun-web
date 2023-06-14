# CIMUN XVIII Front End Web Application

Hello! Welcome to the repository for the CIMUN XVIII web application. This is an
open-source [Next.js](https://nextjs.org/) project developed and maintained by
the volunteer-run CIMUN Department of Technology.

Chicago International Model United Nations (CIMUN) is an annual inter-scholastic
(high school) Model UN conference in Chicago, IL. Our focus is to create realistic 
educational opportunities for young leaders in the scholastic MUN community.
We are organized by the Model United Nations Development Organization (MUNDO).

This project is the first iteration of hopefully many projects from the CIMUN
engineering team to provide future conference organizers with the tools necessary
to organize Model UN conferences for the 21st Century.

Our FE stack uses Next.js, React, and TypeScript in order to create exciting
front-ends for conference attendees, as well as Model UN-specific, CRM-like
administrative tools for conference organizers and stakeholders.

The project here, as well as the projects on the
[model-un](https://github.com/model-un) GitHub organization page are all **open source**,
licensed under the [GNU GPL v2](./LICENSE) license.

This project uses [Vercel](https://vercel.com?utm_source=model-un&utm_campaign=oss) for all
our continuous deployment needs.

<p align="center">
  <a href="https://vercel.com?utm_source=model-un&utm_campaign=oss" target="blank">
    <img src="./public/vercel-banner.svg" width="200" alt="Vercel Banner" />
  </a>
</p>

## Getting Started

First, run the development server:

Install yarn from the following link: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable

```bash yarn dev```

If you get a versioning issue, such as: error cimun-web@0.1.0: The engine “node” is incompatible with this module. Expected version “^14.21.3". Got “16.8.0” 

run the following two commands to fix the version where XX.XX.XX is the needed version number:
```npm install -g n```
```sudo n XX.XX.XX ```

If next is not installed, install it with the following command:
```npm install next@10.2.1 react@17.0.2 react-dom@17.0.2```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Vercel

We use the [Vercel Platform](https://vercel.com?utm_source=model-un&utm_campaign=oss) from the creators of Next.js for
our continuous deployment needs.

<p align="center">
  <a href="https://vercel.com?utm_source=model-un&utm_campaign=oss" target="blank">
    <img src="public/Vercel/banner/vercel-banner.svg" width="200" alt="Vercel Banner" />
  </a>ß
</p>
