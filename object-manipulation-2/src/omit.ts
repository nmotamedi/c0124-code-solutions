/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string
): Record<string, unknown> {
  const omitted: Record<string, unknown> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      omitted[key] = source[key];
    }
  }
  return omitted;
}
