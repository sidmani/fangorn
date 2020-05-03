import atomic from './atomic';
import expr from './expr';
import frac from './frac';
import variable from './variable';
import supsub from './supsub';
import fence from './fence';

const UPRIGHT_FONT = 'Main-Regular';

// a number, possibly with a decimal
function number({ value }) {
  const children = [];
  for (let i = 0; i < value.length; i += 1) {
    children.push(atomic({ font: UPRIGHT_FONT, char: value.charAt(i) }));
  }

  return expr({
    macro: 'number',
    children,
  });
}

// a differential is an upright d followed by a variable
function differential({ diffVar, partial }) {
  return expr({
    macro: 'differential',
    children: [
      atomic({
        char: partial ? '∂' : 'd',
        font: UPRIGHT_FONT,
      }),
      variable({ name: diffVar }),
    ],
  });
}

// a delimited list of expressions
// useful primitive for row vectors, function arguments
function delimitedExpr({ delimiter, exprs }) {
  const children = [];
  for (let i = 0; i < exprs.length - 1; i += 1) {
    children.push(exprs[i]);
    children.push(atomic({ char: delimiter, font: UPRIGHT_FONT, rightSpacing: true }));
  }
  children.push(exprs[exprs.length - 1]);

  return expr({
    macro: 'delimitedExpr',
    children,
  });
}

// row vector in angle brackets
function rowVec({ exprs }) {
  return expr({
    macro: 'rowVec',
    children: [
      fence({
        left: '⟨',
        right: '⟩',
        expr: delimitedExpr({ delimiter: ',', exprs }),
      }),
    ],
  });
}

// the Leibniz derivative notation, df/dx
function diffLeibniz({
  diffVar, order, target, partial,
}) {
  // by convention, the 'd' is written in an upright font
  const top = [atomic({
    // use the curly ∂ for partial derivatives
    char: partial ? '∂' : 'd',
    font: UPRIGHT_FONT,
  })];
  const bottom = [differential({ diffVar, partial })];

  // if the derivative has an order, display the order as a superscript
  // like d^2x/dt^2
  if (order) {
    top.push(supsub({
      sup: expr({
        children: [number({ value: `${order}` })],
      }),
      sub: expr({ children: [] }),
    }));
    bottom.push(supsub({
      sup: expr({
        children: [number({ value: `${order}` })],
      }),
      sub: expr({ children: [] }),
    }));
  }

  if (target) {
    top.push(variable({ name: target }));
  }

  return expr({
    macro: 'diffLeibniz',
    children: [
      frac({
        numer: expr({ children: top }),
        denom: expr({ children: bottom }),
      }),
    ],
  });
}

// a definite or indefinite single integral
function integral({ intVar, bounds, expr: intExpr }) {
  return expr({
    macro: 'integral',
    children: [
      atomic({ font: 'Size2-Regular', char: '∫' }),
      intExpr,
      differential({ diffVar: intVar }),
    ],
  });
}

export default {
  number,
  delimitedExpr,
  diffLeibniz,
  integral,
  rowVec,
};
