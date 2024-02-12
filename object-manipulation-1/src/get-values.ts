/* exported getValues */
function getValues(object: Record<string, unknown>): unknown[] {
  const values: unknown[] = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
