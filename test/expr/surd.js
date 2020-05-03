import create from '../../src/element';

export default [
  {
    name: 'basic surd',
    tree: create.root({
      expr: create.expr({
        children: [
          create.surd({
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
    name: 'nested surd',
    tree: create.root({
      expr: create.expr({
        children: [
          create.surd({
            expr: create.expr({
              children: [
                create.surd({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 'x' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'surd in numerator and denominator',
    tree: create.root({
      expr: create.expr({
        children: [
          create.frac({
            numer: create.expr({
              children: [
                create.surd({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 'x' }),
                      create.variable({ name: 'y' }),
                    ],
                  }),
                }),
              ],
            }),
            denom: create.expr({
              children: [
                create.surd({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 'x' }),
                      create.variable({ name: 'y' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'surd in fence',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.surd({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 's' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'surd in denominator',
    tree: create.root({
      expr: create.expr({
        children: [
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'a' }),
              ],
            }),
            denom: create.expr({
              children: [
                create.variable({ name: 'b' }),
                create.surd({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 'x' }),
                      create.variable({ name: 'y' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'frac in surd',
    tree: create.root({
      expr: create.expr({
        children: [
          create.surd({
            expr: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'a' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [
                      create.variable({ name: 'b' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
];
