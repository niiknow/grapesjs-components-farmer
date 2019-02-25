# grapesjs-plugin-formfields
> grapesjs plugin to build form aka GrapesJs FormBuilder plugin

The primary goal of this plugin is to allow for building of Generic form field components that provide the same trait/behavior on the GrapeJS editor but render different output for different CSS frameworks. The base design is similar to the GrapesJs MJML plugin. The initial CSS framework is bootstrap4.

## Development
This library uses the NodeJS library `laravel-mix` to simplify build and packaging.

Requirement: Install NodeJS, NPM

Then:
```
git clone https://github.com/niiknow/grapesjs-plugin-formfields
cd vue-datatables-net
npm install
```
                                                                                 
or in one command:                                                               
                                                                                 
```                                                                              
npm install git+https://github.com/niiknow/grapesjs-plugin-formfields.git                
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
npm install grapesjs-plugin-formfields
```

## Planning
- [ ] Build generic form field components
- [ ] Demo how to get components json and html

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
