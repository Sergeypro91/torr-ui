export const getKey = ({ index, name }: { index: number; name?: unknown }) =>
  `${name}-${index}`;
