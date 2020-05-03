import m from 'mithril';
import fontMetrics from './fontMetrics';
import { fontContainer } from './util';
import { FUNCTION_PADDING } from './parameters';

const font = 'Main-Regular';

function draw(func) {
  let width = 0;
  let height = 0;
  let depth = 0;
  for (let i = 0; i < func.name.length; i += 1) {
    const char = func.name.charAt(i);
    const metrics = fontMetrics(font, char);
    width += metrics.width;
    height = Math.max(metrics.height, height);
    depth = Math.max(metrics.depth, depth);
  }

  return {
    span: m(fontContainer, { font }, func.name),
    flags: {
      width,
      height,
      depth,
      rightSpacing: { q: FUNCTION_PADDING, heat: 5 },
    },
  };
}

export default {
  draw,
  environment: [],
};
