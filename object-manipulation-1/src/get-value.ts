/* exported getValue */
function getValue(
  object: Record<string, string | number>,
  key: string
): unknown {
  return object[key];
}
