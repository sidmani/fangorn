import m from 'mithril';
import {
  BASELINE_TO_BOTTOM,
  SUPERSCRIPT_BASELINE,
  SCRIPT_SIZE,
  SCRIPT_SCRIPT_SIZE,
} from './parameters';
import styles from './expr.css';

function draw(supsub, env, [sup, sub], [supFlags, subFlags]) {
  let innerFontSize;
  if (env.script === 0) {
    innerFontSize = SCRIPT_SIZE;
  } else if (env.script === 1) {
    // use relative sizes because units are ems
    innerFontSize = SCRIPT_SCRIPT_SIZE / SCRIPT_SIZE;
  } else {
    // don't get any smaller after 2nd nested superscript
    innerFontSize = 1;
  }

  const width = innerFontSize * Math.max(subFlags.width, supFlags.width);

  // the superscript sits on the axis, unless the previous node is taller than one line
  const base = SUPERSCRIPT_BASELINE + Math.max(0, env.previous.height - 1);

  // deep superscripts need to be moved up more
  const depthAdj = supFlags.depth > BASELINE_TO_BOTTOM ? supFlags.depth : 0;

  // convert to em and add baseline correction
  const supBottom = BASELINE_TO_BOTTOM * (1 / innerFontSize - 1)
    + depthAdj
    + base / innerFontSize;

  const flags = {
    width,
    height: base + innerFontSize * (depthAdj + supFlags.height),
    depth: 0,
    heat: 10,
  };

  // injectors
  const injected = env.injector && env.injector(supsub, env, flags);

  return {
    span: m('span', {
      class: styles.container,
      style: { width: `${width}em` },
    },
    injected && injected.before,
    m('span', {
      class: styles.absolute,
      style: {
        'font-size': `${innerFontSize}em`,
        bottom: `${supBottom}em`,
      },
    }, sup),
    injected && injected.after),
    flags,
  };
}

export default {
  draw,
  environment: [{ script: 1 }],
};
