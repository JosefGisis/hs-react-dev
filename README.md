## Welcome!

This repo is is a demonstration of a local development project for the HubSpot CMS. It contains examples for both a theme folder that contains templates, layouts, css, js, assets, etc. (this was fetched from the design manager for my AI generated HS website) and some projects that contains CMS React.

First: Install the HubSpot CLI globally. Use this guide https://developers.hubspot.com/docs/guides/cms/setup/getting-started-with-local-development. You will first install the HubSpot CLI and then you will need to set up the local repository and then authorize it.

You can upload changes to the website theme by running:

```shell
hs upload theme_name theme_name
```

### CMS React

To work with CMS-React, you will first need to create a project.
```shell
hs project create
```
Each project can contain multiple apps. Each app has its own package.json file where you can set up some dependencies. Use the structure of the hello-world-app in the hello world project to start your own app.