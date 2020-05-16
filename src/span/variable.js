import m from 'mithril';
import fontMetrics, { GREEK_LATIN_FALLBACKS } from './fontMetrics';
import { fontContainer } from './util';

function draw(node, env) {
  let font;
  let char;

  const code = node.name.charCodeAt(0);

  if (code >= 913 && code <= 937) {
    // if the symbol is uppercase Greek, it's rendered in the upright font
    font = 'Main-Regular';
    // if the char is identical to a latin character, render it as upright latin
    // because the KaTeX upright font doesn't support these codepoints
    char = GREEK_LATIN_FALLBACKS[node.name] || node.name;
  } else {
    // otherwise, it's rendered as italic
    font = 'Math-Italic';
    char = node.name;
  }

  const flags = fontMetrics(font, char);

  const injected = env.injector && env.injector(node, env, flags);
  return {
    span: m(fontContainer, { font },
      injected && injected.before,
      char,
      injected && injected.after),
    flags,
  };
}

export default {
  draw,
  environment: [],
};
