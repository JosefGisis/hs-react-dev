## Welcome!

This repo is is a demonstration of a local development project for the HubSpot CMS. It contains examples for both a theme folder that contains templates, layouts, css, js, assets, etc. (this was fetched from the design manager for my AI generated HS website) and some projects that contains CMS React.

Recommended reading:

-   https://developers.hubspot.com/docs/guides/cms/
-   https://developers.hubspot.com/docs/guides/cms/content/templates/overview
-   https://developers.hubspot.com/docs/guides/cms/content/themes/build-and-deploy-with-projects
-   https://developers.hubspot.com/docs/guides/cms/content/templates/overview
-   https://github.hubspot.com/cms-react/

First: Install the HubSpot CLI globally. Use this guide https://developers.hubspot.com/docs/guides/cms/setup/getting-started-with-local-development. You will then need to the authorize the project.

You can upload changes to the website theme by running:

```shell
hs upload theme_name theme_name
```

### CMS React

See https://github.hubspot.com/cms-react/ for more information on CMS React. And to learn about modules, partials, and islands.

> The stigg-paywall project was an attempt to get a stigg-paywall in the app. It failed because of CMS React limitations.

To work with CMS-React, you will first need to create a project.

```shell
hs project create
```

Each project can contain multiple apps. Each app has its own package.json file where you can set up some dependencies. Use the structure of the hello-world-app in the hello world project to start your own app.

In order to utilize CMS React, your project must use this structure:

```
project-folder/
│
├── js-package/
│   ├── components/
│   │   ├── partials/
│   │   ├── partials/
│   │   └── islands/
│   ├── cms-assets.json
│   └── package.json
│
├── … optionally other project components …
│
└── hsproject.json
```

Within the app run

```shell
hs project upload
```

to upload your modules, partials, and islands.

Still within the app run

```shell
hs-cms-dev-server .
```

to start local development to see your changes immediately applied.
