const register = require('ignore-styles').default;
const id = require('identity-obj-proxy');
const jsdom = require('jsdom');
const tap = require('tap');

const dom = new jsdom.JSDOM('', { pretendToBeVisual: true });
global.window = dom.window;
global.document = dom.window.document;
global.requestAnimationFrame = dom.window.requestAnimationFrame;

register(undefined, (module) => {
  module.exports = id;
});

tap.cleanSnapshot = (s) => s.replace(/"tag": "([0-9.]+)"/g, '"tag": "{tag}"');
