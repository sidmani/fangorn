const fs = require('fs');
const m = require('mithril');
const tap = require('tap');
const puppeteer = require('puppeteer');
const span = require('../src/span').default
const EXPR_GROUPS = require('./expr').default;

// This file tests both HTML and actual images produced by Fangorn.
// Run with environment var PHYDELA_TEST_VISUAL=1 to display renderings
// in Chrome.
// No actual expressions are declared in this file- see the expr/ folder.
// For some reason, puppeteer doesn't load local resources (fonts),
// so we load the KaTeX fonts from their CDN. As a result, this test suite requires
// a network connection.

tap.test('fangorn render snapshots', async (t) => {
  const style = document.createElement('style');
  style.innerHTML = fs.readFileSync('./src/span/expr.css', 'utf8');
  document.head.appendChild(style);
  document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">';

  // also need sanitize.css, load from its cdn
  document.head.innerHTML += '<link href="https://unpkg.com/sanitize.css" rel="stylesheet" />';

  const browser = await puppeteer.launch({
    headless: !process.env.PHYDELA_TEST_VISUAL,
  });
  const page = await browser.newPage();
  const node = document.createElement('div');
  document.body.appendChild(node);

  async function testGroup(_t, arr, name) {
    const names = {};
    for (let i = 0; i < arr.length; i += 1) {
      if (names[arr[i].name]) {
        throw new Error(`test name conflict @ ${arr[i].name}`);
      }
      names[arr[i].name] = true;

      m.render(node, m(span, { tree: arr[i].tree }));
      await page.setContent(document.documentElement.innerHTML);
      await page.evaluateHandle('document.fonts.ready');
      const str = await page.screenshot({
        omitBackground: true,
        encoding: 'base64',
      });

      _t.matchSnapshot(str, `${name}/${arr[i].name}:render`);
      _t.matchSnapshot(node.innerHTML, `${name}/${arr[i].name}:html`);

      if (process.env.PHYDELA_TEST_VISUAL) {
        await new Promise((r) => setTimeout(r, 4000));
      }
    }
  }

  const keys = Object.keys(EXPR_GROUPS);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    await t.test(`exprs/${key}`, async (t2) => {
      await testGroup(t2, EXPR_GROUPS[key], key);
      t2.end();
    });
  }

  await browser.close();
  t.end();
});
