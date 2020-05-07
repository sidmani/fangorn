# Fangorn
Fangorn is a small, fast math renderer for the web without the baggage of TeX. It depends only on `sanitize.css` and `mithril.js`, yielding a gzipped size of about 15 kb. Fangorn is extensible and can be used to write math editors and other interactive tools.

You can see a demo [here](https://fangorn.sidmani.com).

Currently, it can render superscripts, fractions, parentheses with automatic sizing, square roots, and regular/partial derivatives. Documentation is forthcoming, but may be delayed since some things are likely to change; I don't want to depend on mithril.js if possible, since just using the DOM API instead would decrease bundle size to 3 kb.

It should run on all reasonable browsers. To run the demo locally, clone the repo and run `npm run demo`. `npm test` runs snapshot tests; this may be a bit slow, since it uses headless chromium to actually render images as well as matching HTML.
