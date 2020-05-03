export default function (params) {
  return {
    kind: 'atomic',
    char: params.char,
    font: params.font,
    rightSpacing: params.rightSpacing,
    leftSpacing: params.leftSpacing,
  };
}
