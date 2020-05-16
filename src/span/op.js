import m from 'mithril';
import { INLINE_PADDING } from './parameters';
import { fontContainer } from './util';
import fontMetrics from './fontMetrics';

const OP_UNICODE = {
  // + sign is the same
  '+': '+',
  // - sign should be U+2212 'MINUS SIGN'
  '-': '\u2212',
  // * for multiplication is U+22C5 'DOT OPERATOR'
  '*': '\u22C5',
  // = sign is the same
  '=': '=',
};

const font = 'Main-Regular';

function draw(op, env) {
  const sym = OP_UNICODE[op.symbol];
  const flags = fontMetrics(font, sym);

  // operators are not spaced in super/subscripts to improve compactness
  // left spacing only if a node exists on the left
  if (!env.script) {
    flags.leftSpacing = { q: 2 * INLINE_PADDING, heat: -20 };
  }

  // unary operators are not spaced on the right
  if (!op.unary && !env.script) {
    flags.rightSpacing = { q: 2 * INLINE_PADDING, heat: 20 };
  }

  if (op.unary) {
    // currently, all unary operators are on the left
    // so they should bind strongly to the right
    flags.heat = -50;
  }


  // handle injected content
  const injected = env.injector && env.injector(op, env, flags);

  return {
    span: [
      m(fontContainer, { font },
        injected && injected.before,
        sym,
        injected && injected.after),
    ],
    flags,
  };
}

export default {
  draw,
  environment: [],
};
