import create from '../../src/element';

export default [
  {
    name: 'sin x',
    tree: create.root({
      expr: create.expr({
        children: [
          create.func({ name: 'sin' }),
          create.variable({ name: 'x' }),
        ],
      }),
    }),
  },
  {
    name: 'func with fence around operand',
    tree: create.root({
      expr: create.expr({
        children: [
          create.func({ name: 'ln' }),
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'x' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'func with operand fence and another spaced object',
    tree: create.root({
      expr: create.expr({
        children: [
          create.func({ name: 'ln' }),
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'x' }),
              ],
            }),
          }),
          create.variable({ name: 'x' }),
        ],
      }),
    }),
  },
  {
    name: 'frac in function',
    tree: create.root({
      expr: create.expr({
        children: [
          create.func({ name: 'arctan' }),
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'y' }),
              ],
            }),
            denom: create.expr({
              children: [
                create.variable({ name: 'x' }),
              ],
            }),
          }),

        ],
      }),
    }),
  },
  {
    name: 'function with superscript',
    tree: create.root({
      expr: create.expr({
        children: [

          create.func({ name: 'sin' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.variable({ name: 'x' }),
          create.op({ symbol: '+' }),
          create.func({ name: 'cos' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.variable({ name: 'x' }),

        ],
      }),
    }),
  },
  {
    name: 'inverse function',
    tree: create.root({
      expr: create.expr({
        children: [
          create.func({ name: 'sec' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.op({ unary: true, symbol: '-' }),
                create.number({ value: '1' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.variable({ name: 'x' }),
        ],
      }),
    }),
  },
];
