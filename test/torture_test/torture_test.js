import m from 'mithril';
import 'sanitize.css';
import exprs from '../expr';
import guides, { superscript } from './guides';
import styles from './torture_test.css';
import span from '../../src/span';
import '../../src/font.css';


let displayGuides = false;
function injector(node, env, flags) {
  if (node.kind === 'expr') {
    return {
      before: m(guides, {
        width: flags.width,
        depth: flags.depth,
        height: flags.height,
        display: displayGuides,
      }),
    };
  }
  if (node.kind === 'supsub') {
    return {
      before: m(superscript, {
        width: flags.width,
        display: displayGuides,
      }),
    };
  }
  return null;
}

let focused;
let params = new URLSearchParams(window.location.search);
if (params.has('section')) {
  focused = exprs[params.get('section')][params.get('i')];
  displayGuides = params.get('guides') || false;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'g') {
    displayGuides = !displayGuides;
    params = new URLSearchParams(window.location.search);
    params.set('guides', displayGuides);
    window.history.pushState(
      '',
      '',
      `?${params.toString()}`);
    buildPage();
    e.preventDefault();
  }

  if (e.key === 'q') {
    params = new URLSearchParams(window.location.search);
    window.history.pushState(
      '',
      '',
      `?${params.toString()}`);
    buildPage();
    e.preventDefault();
  }
});

function render(hasGuides) {
  m.render(document.body,
    focused
      ? m('div', { class: styles.focused },
        m('div', { id: 'container', class: styles.focusedContainer },
          m(span, {
            tree: focused.tree,
            injector: hasGuides ? injector : null,
          })),
        m('a', {
          class: styles.back,
          href: '#',
          onclick() {
            focused = undefined;
            window.history.pushState({}, '', '/');
            buildPage();
          },
        }, 'back'),
        m('div', { class: styles.focusName }, focused.name),
        m('div', { class: styles.focusRenderData },
          m('span', { id: 'numSpans' }),
          ' spans / ',
          m('span', { id: 'renderTime' }), ' ms'))
      : [
        m('h1', 'Fangorn Torture Test'),
        m('p', 'Press g for guidelines.'),
        m('p',
          'Rendered ',
          m('span', { id: 'numSpans' }),
          ' spans in ',
          m('span', { id: 'renderTime' }),
          ' ms'),
        m('div', { id: 'container' },
          Object.keys(exprs).map((sectionName) => m('div',
            m('h2', {
              style: {
                'border-bottom': '2px solid',
              },
            }, sectionName),
            m('div', {
              style: {
                display: 'flex',
                'flex-wrap': 'wrap',
                'align-items': 'flex-start',
              },
            },
            exprs[sectionName].map((o, idx) => m('div', {
              class: styles.exprContainer,
              onclick() {
                focused = o;
                params = new URLSearchParams(window.location.search);
                params.set('section', sectionName);
                params.set('i', idx);
                params.set('guides', displayGuides);
                window.history.pushState(
                  '',
                  `${sectionName}/${o.name}`,
                  `?${params.toString()}`);
                // window.location.search = params.toString();
                buildPage();
              },
            },
            m(span, {
              tree: o.tree,
              injector: hasGuides ? injector : null,
            }))))))),
      ], () => buildPage());
}

function buildPage() {
  console.log('Rebuild page');
  // render once with no guides to get real performance data
  const t0 = performance.now();
  render();
  const t1 = performance.now();

  // set the render time data
  const numSpans = Array.from(document
    .getElementById('container')
    .getElementsByTagName('span'))
    .filter((o) => !/guide/.test(o.class)).length;

  // make the real thing
  render(true);

  document.getElementById('numSpans').innerText = numSpans;
  document.getElementById('renderTime').innerText = t1 - t0;
}

buildPage();
