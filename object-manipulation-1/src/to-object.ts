/* exported toObject */
function toObject(keyValuePair: [string, unknown]): Record<string, unknown> {
  const key: string = keyValuePair[0];
  const value: unknown = keyValuePair[1];
  const object: Record<string, unknown> = {};
  object[key] = value;
  return object;
}
