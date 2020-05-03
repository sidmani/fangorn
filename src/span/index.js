import m from 'mithril';
import variable from './variable';
import fence from './fence';
import frac from './frac';
import supsub from './supsub';
import surd from './surd';
import op from './op';
import func from './func';
import expr from './expr';
import atomic from './atomic';
import root from './root';
import 'sanitize.css'; // if used independently from the rest of Phydela

const boxes = {
  variable,
  fence,
  frac,
  supsub,
  surd,
  op,
  func,
  expr,
  atomic,
  root,
};

// recursively draw the tree
function draw(current, environment) {
  const box = boxes[current.kind];

  // if the current node has no children, draw it
  if (!current.children) {
    return box.draw(current, environment);
  }

  // otherwise recursively draw the children (postorder traversal)
  const childrenArr = [];
  const flagsArr = [];
  let carriedSpacing;
  for (let i = 0; i < current.children.length; i += 1) {
    // get the child of the current node
    const child = current.children[i];

    // create the draw environment for the child
    const childEnv = {};
    // this is the object that defines the child environment
    // for example a frac has environment array [{}, { cramped: true }]
    const wrapperEnv = box.environment[i] || {};
    childEnv.cramped = (wrapperEnv.cramped || 0) + (environment.cramped || 0);
    childEnv.script = (wrapperEnv.script || 0) + (environment.script || 0);

    // data of previous sibling (may not exist)
    // useful for superscripts and subscripts
    childEnv.previous = flagsArr[i - 1];

    // if there's a right wall and this is the last element,
    // or if the current box specifies a right wall
    // notify the child
    if (wrapperEnv.rightWall || (environment.rightWall && i === current.children.length - 1)) {
      childEnv.rightWall = true;
    }

    // same thing for left walls
    if (wrapperEnv.leftWall || (environment.leftWall && i === 0)) {
      childEnv.leftWall = true;
    }

    // certain nodes support injection of arbitrary dom nodes
    // in order to outsource things like the caret, guides
    childEnv.injector = environment.injector;

    // event handlers
    childEnv.onclick = environment.onclick;

    // draw the child, and store the results
    let { span, flags } = draw(child, childEnv);

    let computedLSpace = 0;
    if (carriedSpacing) {
      // if the current span has less heat than the spacing,
      // or if the span has no specified heat
      // the spacing must be applied on the left
      if (flags.heat === undefined || flags.heat < carriedSpacing.heat) {
        computedLSpace += carriedSpacing.q;
        carriedSpacing = undefined;
      }
      // otherwise the spacing is carried again
    }

    let computedRSpace = 0;
    if (flags.rightSpacing) {
      // if we're at a wall, then the spacing should be immediately applied
      // regardless of its heat
      // carriedSpacing must be reset because spacing cannot cross walls
      if (childEnv.rightWall) {
        computedRSpace = flags.rightSpacing.q;
        carriedSpacing = undefined;
      } else {
        // otherwise, carry the spacing to the be applied before the next element
        // but don't stack- instead keep track of what the rightmost element wants
        carriedSpacing = flags.rightSpacing;
      }
    }

    if (flags.leftSpacing) {
      if (childEnv.leftWall) {
        // apply the spacing immediately
        computedLSpace = flags.leftSpacing.q;
      } else if (i > 0
        && flags.leftSpacing.q > computedLSpace
        && (flags.leftSpacing.heat <= (flagsArr[i - 1].heat || 0))) {
        // if this is not the first child,
        // and if leftSpacing is more than the carried value
        // if the heat of the spacing is more than the heat of the previous child,
        // it would have been moved before the previous child- but that's already been
        // rendered. So we discard it in the other case and keep it in this one.
        computedLSpace = flags.leftSpacing.q;
      }
    }

    // wrap the element with spacing as necessary
    if (computedRSpace || computedLSpace) {
      const style = {};
      if (computedRSpace) {
        style['padding-right'] = `${computedRSpace}em`;
      }
      if (computedLSpace) {
        style['padding-left'] = `${computedLSpace}em`;
      }
      span = m('span', { style }, span);
    }

    // update the width based on inserted spacing
    flags.width += computedRSpace + computedLSpace;
    childrenArr.push(span);
    flagsArr.push(flags);
  }

  // draw the parent
  return box.draw(current, environment, childrenArr, flagsArr);
}

export default {
  view(vnode) {
    return draw(vnode.attrs.tree, {
      injector: vnode.attrs.injector,
      onclick: vnode.attrs.onclick,
    }).span;
  },
};

// utility function to merge injectors
export function composeInjectors(a, b) {
  if (!a) return b;
  if (!b) return a;

  return (node, env, flags) => {
    const resA = a(node, env, flags);
    const resB = b(node, env, flags);
    if (!resA) return resB;
    if (!resB) return resA;
    return {
      before: [resA.before, resB.before],
      after: [resA.after, resB.after],
    };
  };
}
