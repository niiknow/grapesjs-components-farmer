# grapesjs-components-farmer
> grapesjs plugin to build components for different css framework

The primary objective of this plugin is to build Form Components.  Component-farmer is playing on the word farmer/former.  We grow/produce components here yall!

## TODO
- [x] Automatically generate form field name.
- [x] Ability to template components for different CSS framework - initially demonstrate/default with Bootstrap5.
- [x] Server-side library for handling form submit: [Lambda Form](https://github.com/niiknow/lambda-form)

**Client-side**
- [x] Client-side library for ajax form submit.
- [x] Client-side handling of google recaptcha v3.
- [ ] Client-side handling and validation for Stripe.
- [ ] Client-side Form Fields validation with [indicative](https://github.com/poppinss/indicative)

## Development
This library uses the NodeJS library `laravel-mix` to simplify build and packaging.

Requirement: Install NodeJS, NPM

Then:
```
git clone https://github.com/niiknow/grapesjs-components-farmer
cd grapesjs-components-farmer
npm install
```

or in one command:
```
npm install git+https://github.com/niiknow/grapesjs-components-farmer.git
```

To run locally (automatically launch firefox):
```
npm run watch
```

To build library for npm publish:
```
npm run build
```

This library is available on NPM, to install:
```
npm install grapesjs-components-farmer
```

## Why GrapesJS?
We like the fact that grapesjs can provide/separate output for components json, xml code, and html.  This allow us to build HTML visually, while saving the code and generating the actual HTML for the user (e.g. in case the browser HTML get injected by browser, some bad extensions, or by a password manager).

## Point of Interest
* [Lambda Form](https://github.com/niiknow/lambda-form) - server-side component.
* [SurveyJS](https://surveyjs.io/) - more advance form builder to look into.

## MIT
