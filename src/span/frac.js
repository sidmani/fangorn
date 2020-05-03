import m from 'mithril';
import bar from './bar';
import {
  BASELINE_TO_BOTTOM,
  INLINE_PADDING,
  FRAC_BAR_PADDING,
  AXIS_HEIGHT,
} from './parameters';
import styles from './expr.css';

function draw(node, env, [numer, denom], [numerFlags, denomFlags]) {
  let vertPadding = FRAC_BAR_PADDING;
  let fontSize = 1;
  // if in a cramped env, shrink bar padding
  if (env.cramped) {
    if (env.cramped === 1) {
      fontSize = 0.7;
    }
    vertPadding /= 2;
  } else if (env.script === 1) {
    vertPadding /= 2;
  }

  const width = Math.max(numerFlags.width, denomFlags.width);

  // get a font-size compensated bar
  const { barSpan, barThickness } = bar({
    script: env.script,
    width,
    bottom: AXIS_HEIGHT + BASELINE_TO_BOTTOM,
  });

  const flags = {
    width,
    rightSpacing: { q: INLINE_PADDING, heat: 5 },
    leftSpacing: { q: INLINE_PADDING, heat: -5 },
    height: AXIS_HEIGHT + barThickness / 2 + vertPadding + numerFlags.totalHeight,
    depth: -(AXIS_HEIGHT - barThickness / 2 - vertPadding - denomFlags.totalHeight),
  };

  const injected = env.injector && env.injector(node, env, flags);

  return {
    span: m('span', {
      class: styles.container,
      style: { width: `${width}em` },
    },
    injected && injected.before,
    m('span', {
      class: styles.absolute,
      style: {
        // TODO: check if fractional correction for fence baseline is necessary (for (ab)/c)
        bottom: `${numerFlags.depth + AXIS_HEIGHT + vertPadding + barThickness / 2}em`,
        left: `${(width - numerFlags.width) / 2}em`,
      },
    }, numer),
    barSpan,
    m('span', {
      class: styles.absolute,
      style: {
        bottom: `${-denomFlags.height + AXIS_HEIGHT - vertPadding - barThickness / 2}em`,
        left: `${(width - denomFlags.width) / 2}em`,
      },
    }, denom),
    injected && injected.after),
    flags,
  };
}

export default {
  draw,
  // the denominator is a cramped environment
  environment: [{}, { cramped: 1 }],
};
