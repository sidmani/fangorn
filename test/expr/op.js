import create from '../../src/element';

export default [
  {
    name: 'sum',
    tree: create.root({
      expr: create.expr({
        children: [
          create.expr({
            children: [
              create.variable({ name: 'x' }),
              create.op({ symbol: '+' }),
              create.variable({ name: 'y' }),
            ],
          }),
        ],
      }),
    }),
  },
  {
    name: 'sum with capitals',
    tree: create.root({
      expr: create.expr({
        children: [

          create.expr({
            children: [
              create.variable({ name: 'A' }),
              create.op({ symbol: '+' }),
              create.variable({ name: 'B' }),
            ],
          }),
        ],
      }),
    }),
  },
  {
    name: 'difference',
    tree: create.root({
      expr: create.expr({
        children: [

          create.expr({
            children: [
              create.variable({ name: 'x' }),
              create.op({ symbol: '-' }),
              create.variable({ name: 'y' }),
            ],
          }),
        ],
      }),
    }),
  },
  {
    name: 'product',
    tree: create.root({
      expr: create.expr({
        children: [

          create.expr({
            children: [
              create.variable({ name: 'x' }),
              create.op({ symbol: '*' }),
              create.variable({ name: 'y' }),
            ],
          }),
        ],
      }),
    }),
  },
  {
    name: 'unary minus',
    tree: create.root({
      expr: create.expr({
        children: [
          create.expr({
            children: [
              create.op({ symbol: '-', unary: true }),
              create.variable({ name: 'X' }),
            ],
          }),
        ],
      }),
    }),
  },
  {
    name: 'double unary minus',
    tree: create.root({
      expr: create.expr({
        children: [
          create.expr({
            children: [
              create.op({ symbol: '-', unary: true }),
              create.op({ symbol: '-', unary: true }),
              create.variable({ name: 'M' }),
            ],
          }),
        ],
      }),
    }),
  },

];
