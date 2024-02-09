/* exported invert */
function invert(
  source: Record<string, string | number>
): Record<string | number, string> {
  const invertedObj: Record<string | number, string> = {};
  for (const key in source) {
    invertedObj[source[key]] = key;
  }
  return invertedObj;
}
