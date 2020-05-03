import create from '../../src/element';

export default [
  {
    name: 'superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.variable({ name: 'y' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.variable({ name: 'a' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.variable({ name: 'p' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.variable({ name: 'o' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'superscript with operator',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '4' }),
                create.op({ symbol: '+' }),
                create.variable({ name: 'y' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'surd in superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
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
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'frac in superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'a' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [
                      create.variable({ name: 'y' }),
                    ],
                  }),
                }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: '2-level superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.variable({ name: 'y' }),
                create.supsub({
                  sup: create.expr({
                    children: [
                      create.variable({ name: 'z' }),
                    ],
                  }),
                  sub: create.expr({ children: [] }),
                }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: '3-level superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.variable({ name: 'y' }),
                create.supsub({
                  sup: create.expr({
                    children: [
                      create.variable({ name: 'z' }),
                      create.supsub({
                        sup: create.expr({
                          children: [
                            create.variable({ name: 'z' }),
                          ],
                        }),
                        sub: create.expr({ children: [] }),
                      }),
                    ],
                  }),
                  sub: create.expr({ children: [] }),
                }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'pythagorean theorem',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'a' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.op({ symbol: '+' }),
          create.variable({ name: 'b' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
          create.op({ symbol: '=' }),
          create.variable({ name: 'c' }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'fence with superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'r' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [
                      create.variable({ name: 's' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          create.supsub({
            sup: create.expr({
              children: [
                create.number({ value: '2' }),
                create.variable({ name: 't' }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
  {
    name: 'fence with frac superscript',
    tree: create.root({
      expr: create.expr({
        children: [
          create.fence({
            expr: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'r' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [
                      create.variable({ name: 's' }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          create.supsub({
            sup: create.expr({
              children: [
                create.frac({
                  numer: create.expr({
                    children: [
                      create.variable({ name: 'n' }),
                    ],
                  }),
                  denom: create.expr({
                    children: [
                      create.variable({ name: 'm' }),
                    ],
                  }),
                }),
              ],
            }),
            sub: create.expr({ children: [] }),
          }),
        ],
      }),
    }),
  },
];
