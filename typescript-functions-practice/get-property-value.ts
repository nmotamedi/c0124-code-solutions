/* exported getPropertyValue */
function getPropertyValue(object: object, key: string): unknown {
  return object[key as keyof typeof object];
}
