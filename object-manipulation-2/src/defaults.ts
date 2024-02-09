/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const targetKeys: unknown[] = [];
  for (const keys in target) {
    targetKeys.push(keys);
  }
  for (const keys in source) {
    if (!targetKeys.includes(keys)) {
      target[keys] = source[keys];
    }
  }
  return target;
}
