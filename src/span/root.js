import m from 'mithril';
import { BASELINE_TO_BOTTOM } from './parameters';
import styles from './expr.css';

function draw(node, env, [expression], [flags]) {
  return {
    span: m('div', { class: styles.tree },
      m('div', {
        style: {
          'padding-bottom': `${Math.max(0, flags.depth - BASELINE_TO_BOTTOM)}em`,
          'padding-top': `${Math.max(0, flags.height - 1)}em`,
        },
      },
      m('span', { class: styles.container }, expression))),
    flags,
  };
}

export default {
  draw,
  environment: [{}],
};
