# rokfor-angular-starter

Rokfor Website Boilerplate running on Angular using

- Gulp Toolchain
- Sass
- Templates

Initially based on [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate).

### Run the Demo

- Clone this repository `$ git clone https://github.com/Rokfor/rokfor-angular-starter.git`
- Run `npm install` from the root directory
- Run `npm run dev` or `gulp dev`

Referring to the readme of [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate):

> Your browser will automatically be opened and directed to the browser-sync proxy address.
> To prepare assets for production, run the `npm run build` script (Note: the production task 
> does not fire up the express > server, and won't provide you with browser-sync's live reloading. 
> Simply use `npm run dev` during development. More > information below)

### Demo Server

Like the [PHP Boilerplate](https://github.com/Rokfor/rokfor-php-starter), this example accesses 
the rokfor demo server. There's only a limited read-only access open to the public. Ping 
me [@uphofer](http://twitter.com/uphofer) if you need a real account or deploy your own 
[server](https://github.com/Rokfor/rokfor-slim).

In order to change your api credentials, open `constants.js` in the `app` folder:

    const AppSettings = {
      domain: window.location.hostname,
      appTitle: 'Demo',
      apiEndpoint: 'https://your.server.goes.here/api',
      apiKey: 'YOUR_READ_ONLY_KEY'
    };

The angular demo supports only read only access...