import create from '../../src/element';

export default [
  {
    name: 'basic integral',
    tree: create.root({
      expr: create.expr({
        children: [
          create.integral({
            intVar: 'x',
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
];
