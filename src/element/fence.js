export default function (params) {
  return {
    kind: 'fence',
    children: [params.expr],
    left: params.left || '(',
    right: params.right || ')',
  };
}
