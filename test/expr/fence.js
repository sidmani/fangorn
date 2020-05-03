import create from '../../src/element';

export default [
  {
    name: 'small fence',
    tree: create.root({
      expr: create.expr({
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
  },
  {
    name: 'fence with number',
    tree: create.root({
      expr: create.expr({
        children: [
          create.number({ value: '17' }),
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'Q' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },

  {
    name: 'small fence with multiple chars',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'a' }),
                create.variable({ name: 'b' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'consecutive fences with different bottoms',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'a' }),
                create.variable({ name: 'x' }),
              ],
            }),
          }),
          create.fence({
            expr: create.expr({
              children: [
                create.variable({ name: 'p' }),
                create.variable({ name: 'q' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },

  {
    name: 'frac in fence 2',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'a' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [create.variable({ name: 'y' })],
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
    name: 'frac in fence with something outside',
    tree: create.root({
      expr: create.expr({
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
    name: 'frace in fence with numerator depth',
    tree: create.root({
      expr: create.expr({
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
  },
  {
    name: 'square brackets',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            left: '[',
            right: ']',
            expr: create.expr({
              children: [
                create.variable({ name: 'x' }),
                create.op({ symbol: '-' }),
                create.variable({ name: 'y' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'big square brackets',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            left: '[',
            right: ']',
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
  },
  {
    name: 'absolute value',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            left: '|',
            right: '|',
            expr: create.expr({
              children: [
                create.variable({ name: 'x' }),
                create.op({ symbol: '-' }),
                create.variable({ name: 'y' }),
              ],
            }),
          }),
        ],
      }),
    }),
  },
  // {
  //   name: 'big absolute value',
  //   tree: create.root({
  //     expr: create.expr({
  //       children: [
  //         create.fence({
  //           left: '|',
  //           right: '|',
  //           expr: create.expr({
  //             children: [
  //               create.frac({
  //                 numer: create.expr({
  //                   children: [
  //                     create.variable({ name: 'x' }),
  //                   ],
  //                 }),
  //                 denom: create.expr({
  //                   children: [
  //                     create.variable({ name: 'y' }),
  //                   ],
  //                 }),
  //               }),
  //             ],
  //           }),
  //         }),
  //       ],
  //     }),
  //   }),
  // },
  {
    name: 'basic vector',
    tree: create.root({
      expr: create.expr({
        children: [
          create.rowVec({
            exprs: [
              create.expr({ children: [create.variable({ name: 'i' })] }),
              create.expr({ children: [create.variable({ name: 'j' })] }),
              create.expr({ children: [create.variable({ name: 'k' })] }),
            ],
          }),
        ],
      }),
    }),
  },
];
