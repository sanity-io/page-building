# Page Building Example

A Sanity Studio project configured with a very simple page builder.
Companion code for the guide "[How to use structured content for page building](https://www.sanity.io/guides/how-to-use-structured-content-for-page-building)" on the Sanity.io Exchange.

Note this is only the 'headless CMS' portion of the page builder. Whatever front-end (head) you add is up to you.

## How to Use

- clone the repo locally
- get a project id from [sanity.io's manage console](https://sanity.io/manage)
- add a `.env.local` file with at least

```bash
SANITY_STUDIO_PROJECT_ID="your project id"
```

then from the project directory install the required packages with `npm install` and then you should be able to start the studio locally with `npx studio dev` and then hit the localhost url it provides to start adding your data.
