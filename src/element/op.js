export default function (params) {
  return {
    kind: 'op',
    symbol: params.symbol,
    unary: params.unary,
  };
}
