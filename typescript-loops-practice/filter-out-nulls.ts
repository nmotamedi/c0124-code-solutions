/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const filteredValues: unknown[] = [];
  for (let n = 0; n < values.length; n++) {
    if (values[n] !== null) {
      filteredValues.push(values[n]);
    }
  }
  return filteredValues;
}
