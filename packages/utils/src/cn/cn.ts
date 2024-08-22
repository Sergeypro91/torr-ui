export const cn = (
  ...classes: (string | boolean | null | undefined)[]
): string => {
  return classes.filter(Boolean).join(' ');
};
