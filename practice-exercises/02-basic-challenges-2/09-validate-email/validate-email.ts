// Need to rework to actually validate like the solution
export function validateEmail(email: string): boolean {
  if (email.includes('.') && email.includes('@') && email[0] !== '@') {
    return true;
  } else {
    return false;
  }
}
