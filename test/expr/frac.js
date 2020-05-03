import create from '../../src/element';

export default [
  {
    name: 'frac in fence',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.variable({ name: 'z' }),
          create.fence({
            expr: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'a' }),
                      create.variable({ name: 'a' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [create.variable({ name: 'x' })],
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
    name: 'frac with numerator depth',
    tree: create.root({
      expr: create.expr({
        children: [
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'p' }),
                create.variable({ name: 'q' }),
              ],
            }),
            denom: create.expr({
              children: [create.variable({ name: 'x' })],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'frac with numbers',
    tree: create.root({
      expr: create.expr({
        children: [
          create.frac({
            numer: create.expr({
              children: [
                create.number({ value: '1' }),
              ],
            }),
            denom: create.expr({
              children: [create.number({ value: '2' })],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'frac with denominator depth',
    tree: create.root({
      expr: create.expr({
        children: [
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'x' }),
                create.variable({ name: 'z' }),
              ],
            }),
            denom: create.expr({
              children: [create.variable({ name: 'y' })],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'basic frac',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
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
  },
  {
    name: 'frac with fence in denominator',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'p' }),
                create.variable({ name: 'q' }),
              ],
            }),
            denom: create.expr({
              children: [
                create.fence({
                  expr: create.expr({
                    children: [create.variable({ name: 'x' })],
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
    name: 'frac with no numerator depth and some denominator depth',
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
        ],
      }),
    }),
  },
  {
    name: 'frac with nested frac in denominator',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.frac({
            numer: create.expr({
              children: [
                create.variable({ name: 'p' }),
                create.variable({ name: 'q' }),
              ],
            }),
            denom: create.expr({
              children: [
                create.fence({
                  expr: create.expr({
                    children: [
                      create.variable({ name: 'x' }),
                      create.frac({
                        numer: create.expr({
                          children: [
                            create.variable({ name: 'p' }),
                            create.variable({ name: 'q' }),
                          ],
                        }),
                        denom: create.expr({
                          children: [
                            create.fence({
                              expr: create.expr({
                                children: [create.variable({ name: 'x' })],
                              }),
                            }),
                          ],
                        }),
                      }),
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
    name: 'depth-4 continued fraction',
    tree: create.root({
      expr: create.expr({
        children: [
          create.number({ value: '1' }),
          create.op({ symbol: '+' }),
          create.frac({
            numer: create.expr({ children: [create.variable({ name: 'x' })] }),
            denom: create.expr({
              children: [
                create.number({ value: '1' }),
                create.op({ symbol: '+' }),
                create.frac({
                  numer: create.expr({ children: [create.variable({ name: 'x' })] }),
                  denom: create.expr({
                    children: [
                      create.number({ value: '1' }),
                      create.op({ symbol: '+' }),
                      create.frac({
                        numer: create.expr({ children: [create.variable({ name: 'x' })] }),
                        denom: create.expr({
                          children: [
                            create.number({ value: '1' }),
                            create.op({ symbol: '+' }),
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
        ],
      }),
    }),
  },
];
