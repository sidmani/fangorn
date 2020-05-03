import m from 'mithril';
import fontMetrics from './fontMetrics';
import { fontContainer, delimSize } from './util';

function draw(fence, env, [expr], [flags]) {
  const font = delimSize(flags.totalHeight);
  const leftData = fontMetrics(font, fence.left);
  const rightData = fontMetrics(font, fence.right);

  // TODO: assumption is that left, right have same vertical extent
  // in asymmetric fences, use Math.max
  // Also assumed that fences are taller than content
  const resultFlags = {
    width: leftData.width + flags.width + rightData.width,
    // TODO: compare height of ( with expression height
    height: leftData.height,
    depth: leftData.depth,
    // fences have high heat because they're used in function args
    heat: 10,
  };

  // handle injected content
  const injected = env.injector && env.injector(fence, env, resultFlags);

  return {
    span: [
      injected && injected.before,
      m(fontContainer, {
        font,
        onclick: (e) => env.onclick && env.onclick(e, fence),
      }, fence.left),
      expr,
      m(fontContainer, { font }, fence.right),
      injected && injected.after,
    ],
    flags: resultFlags,
  };
}

export default {
  draw,
  environment: [{ leftWall: true, rightWall: true }],
};
