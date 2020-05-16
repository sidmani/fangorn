import m from 'mithril';
import fontMetrics from './fontMetrics';
import bar from './bar';
import { fontContainer, delimSize, BASELINES } from './util';

// TODO: make surds fully dynamic
function draw(node, env, [expr], [exprFlags]) {
  const font = delimSize(exprFlags.totalHeight);
  const metrics = fontMetrics(font, '√');

  // get a bar of standard thickness
  const { barSpan, barThickness } = bar({
    script: env.script,
    width: exprFlags.width,
    bottom: metrics.height + BASELINES[font],
  });

  const flags = {
    width: metrics.width + exprFlags.width,
    height: metrics.height + barThickness,
    depth: metrics.depth,
  };

  const injected = env.injector && env.injector(node, env, flags);

  return {
    span: [
      injected && injected.before,
      m(fontContainer, { font }, '√', barSpan),
      expr,
      injected && injected.after],
    flags,
  };
}

export default {
  draw,
  environment: [{ leftWall: true }],
};
