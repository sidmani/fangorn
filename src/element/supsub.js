export default function (params) {
  return {
    kind: 'supsub',
    children: [
      params.sup,
      params.sub,
    ],
  };
}
