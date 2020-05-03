export default function (params) {
  return {
    kind: 'expr',
    children: params.children,
    macro: params.macro,
  };
}
