import create from '../../src/element';

export default [
  {
    name: 'single char',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
        ],
      }),
    }),
  },
  {
    name: 'multiple chars',
    tree: create.root({
      expr: create.expr({
        children: [
          create.variable({ name: 'x' }),
          create.variable({ name: 'y' }),
          create.variable({ name: 'z' }),
        ],
      }),
    }),
  },
  {
    name: 'multiple chars with number',
    tree: create.root({
      expr: create.expr({
        children: [
          create.number({ value: '27' }),
          create.variable({ name: 'y' }),
          create.variable({ name: 'z' }),
        ],
      }),
    }),
  },
  {
    name: 'capital with number',
    tree: create.root({
      expr: create.expr({
        children: [
          create.number({ value: '5' }),
          create.variable({ name: 'A' }),
        ],
      }),
    }),
  },
];
