import create from '../../src/element';

export default [
  {
    name: 'diff wrt x',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 'x' }),
        ],
      }),
    }),
  },
  {
    name: 'diff with greek',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 'θ' }),
        ],
      }),
    }),
  },
  {
    name: 'diff with greek uppercase',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 'Ξ' }),
        ],
      }),
    }),
  },
  {
    name: 'second-order diff',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 't', order: 2 }),
        ],
      }),
    }),
  },
  {
    name: 'diff with target',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 't', order: 3, target: 'Ψ' }),
        ],
      }),
    }),
  },
  {
    name: 'partial diff',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 't', partial: true }),
        ],
      }),
    }),
  },
  {
    name: 'partial diff with order',
    tree: create.root({
      expr: create.expr({
        children: [
          create.diffLeibniz({ diffVar: 't', order: 2, target: 'f', partial: true }),
        ],
      }),
    }),
  },


];
