import m from 'mithril';
import {
  AXIS_HEIGHT,
  BASELINE_TO_BOTTOM,
  SUPERSCRIPT_BASELINE,
} from '../../src/span/parameters';
import styles from './torture_test.css';

export default {
  view(vnode) {
    const {
      depth, height, width, display,
    } = vnode.attrs;

    return m('span', {
      class: styles.guides,
      style: {
        display: display ? 'inline-block' : null,
      },
    },
    // axis
    m('span', {
      class: styles.guideline,
      style: {
        'background-color': 'green',
        width: `${width}em`,
        height: '1px',
        left: '0',
        bottom: `calc(${AXIS_HEIGHT + BASELINE_TO_BOTTOM}em - 1px)`,
      },
    }),
    // depth
    m('span', {
      class: styles.guideline,
      style: {
        'background-color': 'blue',
        width: '2px',
        height: `${depth}em`,
        left: '0',
        bottom: `${BASELINE_TO_BOTTOM - depth}em`,
      },
    }),
    // baseline
    m('span', {
      class: styles.guideline,
      style: {
        'background-color': 'orange',
        width: `${width}em`,
        height: '1px',
        left: '0',
        bottom: `calc(${BASELINE_TO_BOTTOM}em - 1px)`,
      },
    }),
    // height
    m('span', {
      class: styles.guideline,
      style: {
        'background-color': 'red',
        width: '2px',
        height: `${height}em`,
        left: '0',
        bottom: `${BASELINE_TO_BOTTOM}em`,
      },
    }),
    // top
    m('span', {
      class: styles.guideline,
      style: {
        'border-top': '1px dashed red',
        width: `${width}em`,
        height: '1px',
        left: '0',
        bottom: `calc(${height + BASELINE_TO_BOTTOM}em - 1px)`,
      },
    }),
    // bottom
    depth > 0 ? m('span', {
      class: styles.guideline,
      style: {
        'border-top': '1px dashed blue',
        width: `${width}em`,
        height: '1px',
        left: '0',
        bottom: `calc(${BASELINE_TO_BOTTOM - depth}em - 2px)`,
      },
    }) : undefined);
  },
};

const superscript = {
  view(vnode) {
    const { width, display } = vnode.attrs;
    return m('span', {
      class: styles.guides,
      style: {
        display: display ? 'inline-block' : null,
      },
    },
    m('span', {
      class: styles.guideline,
      style: {
        'border-top': '1px dashed cyan',
        width: `${width}em`,
        height: '1px',
        left: '0',
        bottom: `calc(${SUPERSCRIPT_BASELINE + BASELINE_TO_BOTTOM}em - 2px)`,
      },
    }));
  },
};

export { superscript };
