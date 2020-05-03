import m from 'mithril';
import styles from './expr.css';
import {
  BAR_THICKNESS,
  SCRIPT_SIZE,
  SCRIPT_SCRIPT_SIZE,
} from './parameters';

export default function ({
  script, width, bottom,
}) {
  // the bar should have constant thickness
  // if t0o thin, it may become invisible if alignment is unlucky
  let barThickness = BAR_THICKNESS;
  if (script === 1) {
    barThickness /= SCRIPT_SIZE;
  } else if (script > 1) {
    barThickness /= SCRIPT_SCRIPT_SIZE;
  }

  return {
    barSpan: m('span', {
      class: styles.filled,
      style: {
        height: `${barThickness}em`,
        width: `${width || 0}em`,
        bottom: `${(bottom || 0) - barThickness / 2}em`,
      },
    }),
    barThickness,
  };
}
