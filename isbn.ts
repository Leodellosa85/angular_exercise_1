import PromptSync, * as promptSync from 'prompt-sync'

const prompt = PromptSync();

export const isISBN = (isbn: string) => {
  if (isbn.length !== 10) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    const digit = parseInt(isbn[i]);
    if (isNaN(digit)) {
      return false;
    }
    if (digit < 0 || digit > 9) {
      return false;
    }
    sum += digit * (i + 1);
  }

  const lastDigit = isbn[9];
  const digit = lastDigit === 'X' ? 10 : parseInt(lastDigit);
  if (isNaN(digit)) {
    return false;
  }
  if (digit < 0 || digit > 10) {
    return false;
  }
  sum += digit * 10;

  return sum % 11 === 0;
}

const name = prompt("Enter ISBN-10 digit number: ");

console.log(`${name} -> ` + isISBN(name));

