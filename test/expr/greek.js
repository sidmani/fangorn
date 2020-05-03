import create from '../../src/element';

export default [
  {
    name: 'capital alpha',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: '\u0391' }),
        ],
      }),
    }),
  },
  {
    name: 'capital omega',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'Ω' }),
        ],
      }),
    }),
  },
  {
    name: 'capital psi',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'Ψ' }),
        ],
      }),
    }),
  },
  {
    name: 'capital upsilon',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: '\u03A5' }),
        ],
      }),
    }),
  },
  {
    name: 'lowercase theta',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'θ' }),
        ],
      }),
    }),
  },
  {
    name: 'lowercase pi',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'π' }),
        ],
      }),
    }),
  },
  {
    name: 'symbol phi',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: '\u03D5' }),
        ],
      }),
    }),
  },
  // requires AMS fonts - not worth extra bundle size right now
  // {
  //   name: 'symbol kappa',
  //       tree: create.root({
  // expr: create.expr({
  // children: [
  //     create.variable({ name: '\u03F0' }),
  //           ],
  // }),
  // }),
  // },
];
