function draw(node, env, children, flags) {
  // sum width, and find max height, depth
  // in order to determine overall dimensions
  let width = 0;
  let depth = 0;
  let height = 0;
  for (let i = 0; i < flags.length; i += 1) {
    width += flags[i].width;
    depth = Math.max(depth, flags[i].depth);
    height = Math.max(height, flags[i].height);
  }
  // const italic = flags[flags.length - 1].italic || 0;

  const resultFlags = {
    width,
    depth,
    height,
    totalHeight: depth + height,
  };

  // handle injected content
  const injected = env.injector && env.injector(node, env, resultFlags);

  return {
    span: [
      injected && injected.before,
      children,
      injected && injected.after,
    ],
    flags: resultFlags,
  };
}

export default {
  draw,
  environment: [],
};
