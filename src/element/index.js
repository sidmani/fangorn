import variable from './variable';
import fence from './fence';
import frac from './frac';
import expr from './expr';
import supsub from './supsub';
import surd from './surd';
import op from './op';
import func from './func';
import atomic from './atomic';
import macro from './macro';

const root = function (params) {
  return {
    kind: 'root',
    children: [params.expr],
  };
};

export default {
  variable,
  fence,
  frac,
  supsub,
  surd,
  op,
  expr,
  func,
  atomic,
  root,
  // TODO: separate macros into files, and include them dynamically
  ...macro,
};
