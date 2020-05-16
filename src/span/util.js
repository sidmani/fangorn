import m from 'mithril';
import styles from './expr.css';

const FONT_TO_STYLE = {
  'Math-Italic': styles.italic,
  'Main-Regular': styles.size1,
  'Size2-Regular': styles.size2,
  'Size3-Regular': styles.size3,
  'Size4-Regular': styles.size4,
};

// The distance between the baseline and bottom of the bounding box for the standard font
// this is an approximation based on the max depth of the characters
// experimentally determined
export const BASELINES = {
  'Math-Italic': 0.5,
  'Main-Regular': 0.44,
  'Size2-Regular': 0.5,
  'Size3-Regular': 0.5,
  'Size4-Regular': 0.5,
};

const fontContainer = {
  view(vnode) {
    const font = vnode.attrs.font;
    return m('span', {
      class: `${FONT_TO_STYLE[font]} ${styles.container}`,
      style: {
        bottom: `${BASELINES['Math-Italic'] - BASELINES[font]}em`,
      },
    }, vnode.children);
  },
};

export { fontContainer };

// determine the font family for fences and radicals based on content size
export function delimSize(height) {
  if (height <= 0.8) {
    return 'Main-Regular';
  }

  if (height <= 1.5) {
    return 'Size2-Regular';
  }

  if (height <= 2.2) {
    return 'Size3-Regular';
  }

  return 'Size4-Regular';
}
