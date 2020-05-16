import m from 'mithril';
import fontMetrics from './fontMetrics';
import { fontContainer } from './util';
import { INLINE_PADDING } from './parameters';

// an atomic is just a single character in a specified font
// convenient when you need the machinery of a span
function draw(node, env) {
  const flags = fontMetrics(node.font, node.char);
  const injected = env.injector && env.injector(node, env, flags);
  flags.leftSpacing = node.leftSpacing && { q: 2 * INLINE_PADDING, heat: -100 };
  flags.rightSpacing = node.rightSpacing && { q: 2 * INLINE_PADDING, heat: 100 };
  return {
    span: m(fontContainer, { font: node.font },
      injected && injected.before,
      node.char,
      injected && injected.after),
    flags,
  };
}

export default {
  draw,
  environment: [],
};
