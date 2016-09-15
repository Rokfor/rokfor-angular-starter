/*global.Promise = require("native-promise-only");*/
if (typeof global.Promise !== "function") {
  global.Promise = require("bluebird");
}

global.html5Mode = true;

if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
  console.log = function() {};
}

const AppSettings = {
  domain: window.location.hostname,
  appTitle: 'Demo',
  apiEndpoint: 'https://demo.rokfor.ch/api',
  apiKey: '9011ec2f37d2516e057ca2adcab50e45'
};

export default AppSettings;
