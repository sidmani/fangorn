export default function (params) {
  return {
    kind: 'frac',
    children: [
      params.numer,
      params.denom,
    ],
  };
}
