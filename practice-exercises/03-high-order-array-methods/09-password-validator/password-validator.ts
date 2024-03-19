export function validatePassword(password: string): boolean {
  const pswdArr = password.split('');
  return (
    pswdArr.length >= 8 &&
    pswdArr.some((str: string) => str !== str.toLowerCase()) &&
    pswdArr.some((str: string) => +str)
  );
}
